export function LivingGrid() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-grid opacity-30"></div>
  );
}

export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-noise mix-blend-overlay opacity-20"></div>
  );
}
