import { useEffect, useRef, useState, type ReactNode } from "react";

interface DesktopViewportProps {
  children: ReactNode;
  designWidth?: number;
  designHeight?: number;
}

/**
 * Scales a fixed-size design (default 1920×1200) to fit any viewport using
 * CSS transform, preserving aspect ratio. Provides a YouTube-style fullscreen
 * toggle button anchored to the viewport (not the scaled content).
 */
export default function DesktopViewport({
  children,
  designWidth = 1920,
  designHeight = 1200,
}: DesktopViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const recompute = () => {
      const el = containerRef.current;
      if (!el) return;
      const vw = el.clientWidth;
      const vh = el.clientHeight;
      const next = Math.min(vw / designWidth, vh / designHeight);
      setScale(next > 0 ? next : 1);
    };

    recompute();
    window.addEventListener("resize", recompute);

    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // Wait a tick for layout, then recompute scale
      requestAnimationFrame(recompute);
    };
    document.addEventListener("fullscreenchange", onFsChange);

    return () => {
      window.removeEventListener("resize", recompute);
      document.removeEventListener("fullscreenchange", onFsChange);
    };
  }, [designWidth, designHeight]);

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      // Silently ignore — user cancelled or browser blocked
      console.warn("Fullscreen toggle failed", err);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#f2f4f9",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          flexShrink: 0,
          position: "relative",
        }}
      >
        {children}
      </div>

      {/* Fullscreen toggle — lives on the viewport, not the scaled stage */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          width: "40px",
          height: "40px",
          border: "none",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.55)",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          backdropFilter: "blur(8px)",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(0, 0, 0, 0.75)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(0, 0, 0, 0.55)";
        }}
      >
        {isFullscreen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3" />
            <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
            <path d="M3 16h3a2 2 0 0 1 2 2v3" />
            <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          </svg>
        )}
      </button>
    </div>
  );
}
