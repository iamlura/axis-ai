import { useEffect, useState } from "react";
import BaseFrame, { FrequentFilesHome, FrequentApps } from "./Frame2055246477";
import { AppGrid } from "./Frame2055246592";
import AnimatedNavBar from "./components/AnimatedNavBar";
import AiChatInteractive from "./components/AiChatInteractive";
import DesktopViewport from "./components/DesktopViewport";
import {
  QADocsPanel,
  QASummaryView,
  QACalendarView,
  FBDrawingPanel,
  FBResultCard,
  FBFileOpenView,
  Toast,
  DimLayer,
} from "./components/FlowScreens";

type Screen =
  | "home"
  | "qa-docs"
  | "qa-summary"
  | "qa-calendar"
  | "fb-drawing"
  | "fb-result"
  | "fb-file-open";

const NAV_TRANSITION = "800ms ease-in-out";
const FADE_TRANSITION = "500ms ease-in-out";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [showApps, setShowApps] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  // Auto-hide the toast 5 seconds after it appears
  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 5000);
    return () => clearTimeout(t);
  }, [toastVisible]);

  const isHome = screen === "home";
  const hasChatOverlay = screen === "qa-docs" || screen === "fb-drawing";

  const handleSearchSubmit = (rawQuery: string) => {
    const q = rawQuery.toLowerCase();

    // On home: route by keyword
    if (screen === "home") {
      if (q.includes("q3 summary")) {
        setScreen("qa-docs");
      } else if (q.includes("forget") || q.includes("find")) {
        setScreen("fb-drawing");
      }
      // else: no transition — input already cleared by the chat component
      return;
    }

    // On the Q3 summary page: any submit triggers the meeting / calendar view
    if (screen === "qa-summary") {
      setScreen("qa-calendar");
      return;
    }

    // Every other screen: chat submit is a no-op (input still clears)
  };

  const handleCreateSummary = () => setScreen("qa-summary");

  const handleSendInvite = () => {
    setScreen("home");
    setToastVisible(true);
  };

  const handleFindItSubmit = () => setScreen("fb-result");

  const handleOpenFile = () => setScreen("fb-file-open");

  const handleCloseFile = () => setScreen("home");

  return (
    <DesktopViewport>
      <div
        style={{
          width: "1920px",
          height: "1200px",
          position: "relative",
          overflow: "hidden",
          background: "#F2F4F9",
        }}
      >
        {/* ── HOME BACKGROUND LAYER ────────────────────────────────────────── */}
        {/* Base frame (blurred content behind frequent files/apps)           */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: isHome ? 1 : 0,
            transition: `opacity ${FADE_TRANSITION}`,
            pointerEvents: isHome ? "auto" : "none",
          }}
        >
          <BaseFrame />
        </div>

        {/* Backdrop blur when apps view is active */}
        <div
          style={{
            position: "absolute",
            top: "104px",
            left: 0,
            right: 0,
            height: "816px",
            backdropFilter: isHome && showApps ? "blur(30px)" : "blur(0px)",
            transition: `backdrop-filter ${NAV_TRANSITION}, opacity ${FADE_TRANSITION}`,
            pointerEvents: "none",
            zIndex: 1,
            opacity: isHome ? 1 : 0,
          }}
        />

        {/* Frequent Files — slides up when apps are shown */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: isHome && showApps ? "-758.31px" : "0px",
            transition: `top ${NAV_TRANSITION}, opacity ${FADE_TRANSITION}`,
            zIndex: 10,
            width: "1920px",
            height: "1200px",
            opacity: isHome ? 1 : 0,
            pointerEvents: isHome ? "auto" : "none",
          }}
        >
          <FrequentFilesHome />
        </div>

        {/* App Grid — slides up from below */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: isHome && showApps ? "-0.65px" : "705.35px",
            width: "1920px",
            transition: `top ${NAV_TRANSITION}, opacity ${FADE_TRANSITION}`,
            opacity: isHome && showApps ? 1 : 0,
            zIndex: 10,
            pointerEvents: isHome && showApps ? "auto" : "none",
          }}
        >
          <AppGrid />
        </div>

        {/* Frequent Apps — fade out when apps view opens */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            opacity: isHome && !showApps ? 1 : 0,
            transition: `opacity ${FADE_TRANSITION}`,
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <FrequentApps />
        </div>

        {/* ── FLOW SCREENS ─────────────────────────────────────────────────── */}
        {screen === "qa-summary" && <QASummaryView />}
        {screen === "qa-calendar" && <QACalendarView onSendInvite={handleSendInvite} />}
        {screen === "fb-file-open" && <FBFileOpenView onClose={handleCloseFile} />}

        {/* Dim layer behind the in-chat panels (qa-docs, fb-drawing) */}
        <DimLayer visible={hasChatOverlay} />

        {/* Chat-attached panels */}
        {screen === "qa-docs" && <QADocsPanel onCreateSummary={handleCreateSummary} />}
        {screen === "fb-drawing" && <FBDrawingPanel onSubmit={handleFindItSubmit} />}
        {screen === "fb-result" && <FBResultCard onOpenFile={handleOpenFile} />}

        {/* ── PERSISTENT TOP BAR: Navbar + AI Chat (always rendered) ──────── */}
        <div
          style={{
            position: "absolute",
            top: "19.96px",
            left: "60px",
            width: "346px",
            height: "76px",
            zIndex: 40,
            pointerEvents: "none",
          }}
        >
          <AnimatedNavBar showApps={showApps && isHome} transitionDuration={NAV_TRANSITION} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "19.96px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "846px",
            height: "70px",
            zIndex: 40,
            pointerEvents: "auto",
          }}
        >
          <AiChatInteractive onSubmit={handleSearchSubmit} />
        </div>

        {/* Home nav click targets (only active on home) */}
        {isHome && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 41,
            }}
          >
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
        )}

        {/* Toast — after Send Invite */}
        <Toast visible={toastVisible} message="Invite sent · Q3 Review Sync" />
      </div>
    </DesktopViewport>
  );
}
