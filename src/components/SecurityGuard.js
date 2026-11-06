"use client";

import { useEffect } from "react";

export default function SecurityGuard() {
  useEffect(() => {
    // 1. Block right-click context menu globally
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // 2. Block dragging images, links, or media
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // 3. Block DevTools, View-Source, Save-Page, and Print keyboard shortcuts
    const handleKeyDown = (e) => {
      const key = e.key?.toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;

      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I / J / C / K (Inspect, Console, Element Picker) or Cmd+Option+I / J / C / U
      if (
        ctrlOrMeta &&
        (e.shiftKey || e.altKey) &&
        ["i", "j", "c", "k", "u"].includes(key)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U (View Source), Ctrl+S (Save Page/Image), Ctrl+P (Print/Export PDF)
      if (ctrlOrMeta && ["u", "s", "p"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 4. Block copy/cut outside of form inputs
    const handleCopyCut = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      return false;
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("copy", handleCopyCut, { capture: true });
    document.addEventListener("cut", handleCopyCut, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("copy", handleCopyCut, { capture: true });
      document.removeEventListener("cut", handleCopyCut, { capture: true });
    };
  }, []);

  return null;
}

