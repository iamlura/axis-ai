import NavBarHome from "../NavBarHome";
import NavBarApps from "../NavBarApps";

interface AnimatedNavBarProps {
  showApps: boolean;
  transitionDuration: string;
}

export default function AnimatedNavBar({ showApps, transitionDuration }: AnimatedNavBarProps) {
  return (
    <div className="relative size-full">
      {/* Home nav — visible when not showing apps */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: showApps ? 0 : 1,
          transition: `opacity ${transitionDuration}`,
          pointerEvents: showApps ? "none" : "auto",
        }}
      >
        <NavBarHome />
      </div>

      {/* Apps nav — visible when showing apps */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: showApps ? 1 : 0,
          transition: `opacity ${transitionDuration}`,
          pointerEvents: showApps ? "auto" : "none",
        }}
      >
        <NavBarApps />
      </div>
    </div>
  );
}
