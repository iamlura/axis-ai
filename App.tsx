import { useState, useEffect } from "react";
import BaseFrame, { FrequentFilesHome, FrequentApps } from "../imports/Frame2055246477";
import { AppGrid } from "../imports/Frame2055246592";
import Frame2055246597 from "../imports/Frame2055246597";
import AnimatedNavBar from "./components/AnimatedNavBar";
import AiChatInteractive from "./components/AiChatInteractive";

export default function App() {
  const [showApps, setShowApps] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fadePhase, setFadePhase] = useState<"none" | "fadeOut" | "blank" | "fadeIn">("none");
  const T = "800ms ease-in-out";
  const TFade = "1600ms ease-in-out"; // Fade animations (2x slower)

  const handleSearchSubmit = (query: string) => {
    // Start fade out animation
    setFadePhase("fadeOut");

    // After 1600ms, show blank screen
    setTimeout(() => {
      setShowResults(true);
      setFadePhase("blank");

      // After blank, start fade in
      setTimeout(() => {
        setFadePhase("fadeIn");
      }, 0);
    }, 1600);
  };

  return (
    <div
      style={{
        width: "1920px",
        height: "1200px",
        position: "relative",
        overflow: "hidden",
        background: "#F2F4F9",
      }}
    >
      {/* ── LAYER 0: Home Content (fades out when showing results) ── */}
      {!showResults && (
        <>
          {/* ── BaseFrame (without frequent files & frequent apps) ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              opacity: fadePhase === "fadeOut" ? 0 : 1,
              transition: `opacity ${TFade}`,
            }}
          >
            <BaseFrame />
          </div>

          {/* ── Blur overlay on background content ── */}
          <div
            style={{
              position: "absolute",
              top: "104px",
              left: 0,
              right: 0,
              height: "816px",
              backdropFilter: showApps ? "blur(30px)" : "blur(0px)",
              transition: `backdrop-filter ${T}, opacity ${TFade}`,
              pointerEvents: "none",
              zIndex: 1,
              opacity: fadePhase === "fadeOut" ? 0 : 1,
            }}
          />

          {/* ── Frequent Files — slides up ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: showApps ? "-758.31px" : "0px",
              transition: `top ${T}, opacity ${TFade}`,
              zIndex: 10,
              width: "1920px",
              height: "1200px",
              opacity: fadePhase === "fadeOut" ? 0 : 1,
            }}
          >
            <FrequentFilesHome />
          </div>

          {/* ── App Grid — slides up from below, 75px below frequent files ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: showApps ? "-0.65px" : "705.35px",
              width: "1920px",
              transition: `top ${T}, opacity ${TFade}`,
              opacity: fadePhase === "fadeOut" ? 0 : showApps ? 1 : 0,
              zIndex: 10,
            }}
          >
            <AppGrid />
          </div>

          {/* ── Frequent Apps — fade out ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: fadePhase === "fadeOut" ? 0 : showApps ? 0 : 1,
              transition: `opacity ${TFade}`,
              pointerEvents: "none",
              zIndex: 5,
            }}
          >
            <FrequentApps />
          </div>
        </>
      )}

      {/* ── LAYER 1: Results Content (fades in after home content fades out) ── */}
      {showResults && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: fadePhase === "fadeIn" ? 1 : 0,
            transition: `opacity ${TFade}`,
          }}
        >
          <Frame2055246597 />
        </div>
      )}

      {/* ── LAYER 5: Navbar with sliding selection indicator ── */}
      <div
        style={{
          position: "absolute",
          top: "19.96px",
          left: "60px",
          width: "346px",
          height: "76px",
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <AnimatedNavBar showApps={showApps} transitionDuration={T} />
      </div>

      {/* ── LAYER 5b: AI Chat — interactive, above other layers ── */}
      <div
        style={{
          position: "absolute",
          top: "19.96px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "846px",
          height: "70px",
          zIndex: 15,
          pointerEvents: "auto",
        }}
      >
        <AiChatInteractive onSubmit={handleSearchSubmit} />
      </div>

      {/* ── LAYER 6: Click targets — always on top ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        {/* Home */}
        <button
          onClick={() => setShowApps(false)}
          aria-label="Home"
          style={{
            position: "absolute",
            top: "27.96px",
            left: "68px",
            width: "60px",
            height: "60px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        />
        {/* Apps */}
        <button
          onClick={() => setShowApps(true)}
          aria-label="Apps"
          style={{
            position: "absolute",
            top: "27.96px",
            left: "338px",
            width: "60px",
            height: "60px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        />
      </div>
    </div>
  );
}