import svgPaths from "../../imports/svg-atxt4vm5pv";

interface AnimatedNavBarProps {
  showApps: boolean;
  transitionDuration: string;
}

export default function AnimatedNavBar({ showApps, transitionDuration }: AnimatedNavBarProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.5)",
        opacity: 0.7,
        padding: "8px",
        borderRadius: "50px",
        display: "flex",
        gap: "30px",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Sliding black selection circle */}
      <div
        style={{
          position: "absolute",
          width: "67.895px",
          height: "67.895px",
          top: "50%",
          left: showApps ? "calc(50% + 134.91px)" : "calc(50% - 135px)",
          transform: "translate(-50%, -50%)",
          transition: `left ${transitionDuration}`,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "black",
            inset: 0,
            borderRadius: "37px",
          }}
        />
      </div>

      {/* Home icon */}
      <div style={{ position: "relative", width: "60px", height: "60px", overflow: "hidden", borderRadius: "10px", flexShrink: 0 }}>
        <div style={{ position: "absolute", left: "18.15px", top: "13.97px", width: "23.694px", height: "26.052px" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 23.6943 26.0525">
            <path d={svgPaths.p5c30780} fill={showApps ? "black" : "white"} style={{ transition: `fill ${transitionDuration}` }} />
          </svg>
        </div>
      </div>

      {/* Folder icon */}
      <div style={{ position: "relative", width: "60px", height: "60px", overflow: "hidden", borderRadius: "10px", flexShrink: 0 }}>
        <div style={{ position: "absolute", left: "calc(50% - 0.04px)", top: "calc(50% - 0.88px)", width: "27.961px", height: "20.517px", transform: "translate(-50%, -50%)" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 27.9609 20.5168">
            <path d={svgPaths.p2b67a400} fill="black" />
          </svg>
        </div>
      </div>

      {/* Settings icon */}
      <div style={{ position: "relative", width: "60px", height: "60px", overflow: "hidden", flexShrink: 0 }}>
        <div style={{ position: "absolute", left: "calc(50% + 0.04px)", top: "calc(50% + 0.49px)", width: "27.738px", height: "28.381px", transform: "translate(-50%, -50%)" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 27.7376 28.3809">
            <path d={svgPaths.p2615da00} fill="black" />
          </svg>
        </div>
      </div>

      {/* Apps icon */}
      <div style={{ position: "relative", width: "60px", height: "60px", overflow: "hidden", borderRadius: "10px", flexShrink: 0 }}>
        <div style={{ position: "absolute", left: "13.82px", top: "13.82px", width: "32.18px", height: "32.18px", border: "3px solid", borderColor: showApps ? "white" : "black", borderRadius: "18px", transition: `border-color ${transitionDuration}` }} />
        <div style={{ position: "absolute", left: "21.92px", top: "28.12px", width: "3.481px", height: "3.481px" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" r="1.24047" fill={showApps ? "white" : "black"} stroke={showApps ? "white" : "black"} style={{ transition: `fill ${transitionDuration}, stroke ${transitionDuration}` }} />
          </svg>
        </div>
        <div style={{ position: "absolute", left: "28.29px", top: "28.12px", width: "3.481px", height: "3.481px" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" r="1.24047" fill={showApps ? "white" : "black"} stroke={showApps ? "white" : "black"} style={{ transition: `fill ${transitionDuration}, stroke ${transitionDuration}` }} />
          </svg>
        </div>
        <div style={{ position: "absolute", left: "34.67px", top: "28.12px", width: "3.481px", height: "3.481px" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" r="1.24047" fill={showApps ? "white" : "black"} stroke={showApps ? "white" : "black"} style={{ transition: `fill ${transitionDuration}, stroke ${transitionDuration}` }} />
          </svg>
        </div>
      </div>
    </div>
  );
}
