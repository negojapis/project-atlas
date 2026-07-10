'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DottedSurface({ className, ...props }) {
	const containerRef = useRef(null);
	const sceneRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x000000, 100, 3000);

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.set(0, 150, 800);
		camera.lookAt(0, -100, -1000);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize performance
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		container.appendChild(renderer.domElement);

		// Create Plane Geometry
		const geometry = new THREE.PlaneGeometry(6000, 4000, 120, 100);
		geometry.rotateX(-Math.PI / 2);

		// Store original positions for animation
		const originalPositions = [];
		const positionAttribute = geometry.attributes.position;
		for (let i = 0; i < positionAttribute.count; i++) {
			originalPositions.push(
				positionAttribute.getX(i),
				positionAttribute.getY(i),
				positionAttribute.getZ(i)
			);
		}

		// Create material
		const material = new THREE.MeshBasicMaterial({
			color: 0xE10613, // Mastim Red
			wireframe: true,
			transparent: true,
			opacity: 0.15,
		});

		// Create mesh
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.y = -200;
		scene.add(mesh);

		let count = 0;
		let animationId;

		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);

			const positions = geometry.attributes.position;
			
			for (let i = 0; i < positions.count; i++) {
				const x = originalPositions[i * 3];
				const z = originalPositions[i * 3 + 2];

				// Valley curve
				const valley = (x * x) / 3000;
				
				// Flowing waves
				const wave1 = Math.sin(x * 0.002 + count * 0.02) * 50;
				const wave2 = Math.cos(z * 0.005 + count * 0.02) * 80;
				const wave3 = Math.sin((x * z) * 0.000001 + count * 0.01) * 30;

				positions.setY(i, valley + wave1 + wave2 + wave3);
			}

			positions.needsUpdate = true;
			renderer.render(scene, camera);
			count += 1;
		};

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		// Start animation
		animate();

		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			mesh,
			animationId,
		};

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);

				sceneRef.current.mesh.geometry.dispose();
				sceneRef.current.mesh.material.dispose();
				sceneRef.current.renderer.dispose();

				if (container && sceneRef.current.renderer.domElement) {
					container.removeChild(sceneRef.current.renderer.domElement);
				}
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none absolute inset-0 z-0', className)}
			{...props}
		/>
	);
}
