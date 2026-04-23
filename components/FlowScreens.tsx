import { Fragment, useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Shared temporary styling                                                  */
/* -------------------------------------------------------------------------- */

const card: React.CSSProperties = {
  background: "white",
  borderRadius: "20px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
  padding: "28px",
};

const tempLabel: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "16px",
  fontSize: "11px",
  letterSpacing: "0.08em",
  color: "rgba(0,0,0,0.35)",
  textTransform: "uppercase",
  fontFamily: "monospace",
};

const primaryButton: React.CSSProperties = {
  background: "#1a1a1a",
  color: "white",
  border: "none",
  borderRadius: "100px",
  padding: "18px 36px",
  fontFamily: "'Google Sans Flex', sans-serif",
  fontSize: "20px",
  cursor: "pointer",
  transition: "transform 150ms ease, background 150ms ease",
};

const heading: React.CSSProperties = {
  fontFamily: "'Google Sans Flex', sans-serif",
  fontSize: "56px",
  fontWeight: 500,
  color: "#1a1a1a",
  margin: 0,
};

const subheading: React.CSSProperties = {
  fontFamily: "'Google Sans Flex', sans-serif",
  fontSize: "20px",
  color: "rgba(0,0,0,0.55)",
  margin: 0,
};

/* -------------------------------------------------------------------------- */
/*  Flow A — step 2: "documents to include" panel (chat-attached)              */
/* -------------------------------------------------------------------------- */

export function QADocsPanel({ onCreateSummary }: { onCreateSummary: () => void }) {
  const docs = [
    "Q3_2025_Financials.xlsx",
    "Q3 Leadership Sync.docx",
    "Product Roadmap Q3.pptx",
    "Customer_Interviews_Q3.pdf",
    "Q3 Marketing Report.docx",
    "Revenue Dashboard.xlsx",
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "140px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "846px",
        zIndex: 25,
        ...card,
      }}
    >
      <span style={tempLabel}>TEMP · qa-docs</span>
      <h3
        style={{
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "22px",
          color: "#1a1a1a",
          margin: "0 0 18px 0",
        }}
      >
        6 documents will be included in your Q3 summary
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {docs.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 14px",
              background: "#f2f4f9",
              borderRadius: "12px",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "15px",
              color: "#1a1a1a",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "28px",
                background: "#1a1a1a",
                borderRadius: "6px",
                display: "inline-block",
              }}
            />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {name}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "22px" }}>
        <button style={primaryButton} onClick={onCreateSummary}>
          Create Summary
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Flow A — step 3: Q3 Summary (PowerPoint-like, scrollable)                 */
/* -------------------------------------------------------------------------- */

export function QASummaryView() {
  return (
    <div
      style={{
        position: "absolute",
        top: "120px",
        left: "60px",
        right: "60px",
        bottom: "30px",
        overflowY: "auto",
        zIndex: 5,
      }}
    >
      <span style={{ ...tempLabel, top: "-2px", right: "6px" }}>TEMP · qa-summary</span>

      {/* Slide-like hero */}
      <div
        style={{
          ...card,
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "54%",
            height: "100%",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #8577ff 0%, #6a5bff 100%)",
          }}
        />
        <div style={{ width: "40%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <span
              style={{
                width: "20px",
                height: "20px",
                background: "#8577ff",
                borderRadius: "4px",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "rgba(0,0,0,0.6)",
                fontFamily: "'Google Sans Flex', sans-serif",
              }}
            >
              Q3 2025 Summary
            </span>
          </div>
          <h1 style={heading}>
            Marketing
            <br />
            Strategy
          </h1>
          <button style={{ ...primaryButton, marginTop: "32px" }}>Open File</button>
        </div>
      </div>

      {/* Documents included (scroll target — Group 1010109909 equivalent) */}
      <div>
        <h2
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "24px",
            color: "#1a1a1a",
            margin: "0 0 16px 0",
          }}
        >
          Documents included
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                ...card,
                padding: "18px",
                height: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  height: "130px",
                  background: "#f2f4f9",
                  borderRadius: "12px",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  Document {i + 1}.pdf
                </div>
                <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>Updated 2d ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hint footer */}
      <div
        style={{
          marginTop: "40px",
          padding: "16px 24px",
          background: "rgba(0,0,0,0.04)",
          borderRadius: "12px",
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "14px",
          color: "rgba(0,0,0,0.55)",
          textAlign: "center",
        }}
      >
        Next: type anything in the chat above and press Enter to schedule a meeting.
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Flow A — step 4: Outlook Calendar view                                    */
/* -------------------------------------------------------------------------- */

export function QACalendarView({ onSendInvite }: { onSendInvite: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "120px",
        left: "60px",
        right: "60px",
        bottom: "30px",
        zIndex: 5,
        display: "flex",
        gap: "24px",
      }}
    >
      <span style={{ ...tempLabel, top: "-2px", right: "6px" }}>TEMP · qa-calendar</span>

      {/* Calendar grid */}
      <div style={{ ...card, flex: 1, padding: "32px" }}>
        <h2
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "28px",
            color: "#1a1a1a",
            margin: "0 0 24px 0",
          }}
        >
          Thursday, April 23
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "8px" }}>
          {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"].map((h, i) => (
            <Fragment key={h}>
              <div
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.5)",
                  padding: "18px 0",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {h}
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  position: "relative",
                  height: "60px",
                }}
              >
                {i === 2 && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px 8px",
                      background: "linear-gradient(135deg, #8577ff 0%, #6a5bff 100%)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      color: "white",
                      fontFamily: "'Google Sans Flex', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Q3 Review Sync · Team
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Invite panel */}
      <div style={{ ...card, width: "420px", padding: "32px", display: "flex", flexDirection: "column" }}>
        <h3 style={{ ...subheading, color: "#1a1a1a", fontSize: "22px", marginBottom: "20px" }}>
          New meeting
        </h3>
        <label style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Title
        </label>
        <div
          style={{
            background: "#f2f4f9",
            padding: "12px 16px",
            borderRadius: "10px",
            margin: "6px 0 18px 0",
            fontSize: "16px",
          }}
        >
          Q3 Review Sync
        </div>
        <label style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Attendees
        </label>
        <div style={{ margin: "6px 0 18px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
          {["sarah@axis.ai", "mike@axis.ai", "team-leads@axis.ai"].map((e) => (
            <div
              key={e}
              style={{
                background: "#f2f4f9",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              {e}
            </div>
          ))}
        </div>
        <label style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          When
        </label>
        <div
          style={{
            background: "#f2f4f9",
            padding: "12px 16px",
            borderRadius: "10px",
            margin: "6px 0 24px 0",
            fontSize: "16px",
          }}
        >
          Today · 11:00 AM – 12:00 PM
        </div>
        <button style={{ ...primaryButton, marginTop: "auto" }} onClick={onSendInvite}>
          Send Invite
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Flow B — step 2: drawing + text panel (chat-attached)                     */
/* -------------------------------------------------------------------------- */

export function FBDrawingPanel({ onSubmit }: { onSubmit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Crisp rendering at device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    // Account for the DesktopViewport's CSS scale transform
    const scaleX = canvas.offsetWidth / rect.width;
    const scaleY = canvas.offsetHeight / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "140px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "846px",
        zIndex: 25,
        ...card,
      }}
    >
      <span style={tempLabel}>TEMP · fb-drawing</span>
      <h3
        style={{
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "22px",
          color: "#1a1a1a",
          margin: "0 0 8px 0",
        }}
      >
        Tell me what you remember
      </h3>
      <p style={{ ...subheading, fontSize: "15px", margin: "0 0 18px 0" }}>
        Sketch or describe the file — shape, colors, anything you remember.
      </p>

      <canvas
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
        style={{
          width: "100%",
          height: "260px",
          background: "#f2f4f9",
          borderRadius: "14px",
          cursor: "crosshair",
          display: "block",
        }}
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="…or describe it here"
        style={{
          width: "100%",
          boxSizing: "border-box",
          marginTop: "14px",
          padding: "14px 18px",
          borderRadius: "10px",
          border: "1px solid rgba(0,0,0,0.1)",
          background: "white",
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "18px" }}>
        <button
          onClick={clearCanvas}
          style={{
            background: "transparent",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "100px",
            padding: "12px 24px",
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "15px",
            cursor: "pointer",
            color: "rgba(0,0,0,0.6)",
          }}
        >
          Clear
        </button>
        <button style={primaryButton} onClick={onSubmit}>
          Find it
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Flow B — step 3: result card (fades in after 100ms delay)                 */
/* -------------------------------------------------------------------------- */

export function FBResultCard({ onOpenFile }: { onOpenFile: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "140px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "846px",
        zIndex: 25,
        opacity: visible ? 1 : 0,
        transition: "opacity 600ms ease",
        ...card,
      }}
    >
      <span style={tempLabel}>TEMP · fb-result</span>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#34c759",
            boxShadow: "0 0 0 4px rgba(52, 199, 89, 0.2)",
          }}
        />
        <span
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "18px",
            color: "#1a1a1a",
          }}
        >
          Found 1 matching document
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          padding: "18px",
          background: "#f2f4f9",
          borderRadius: "14px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "124px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #8577ff 0%, #6a5bff 100%)",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "18px",
              color: "#1a1a1a",
              marginBottom: "4px",
            }}
          >
            Marketing Strategy Memo.pdf
          </div>
          <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", marginBottom: "10px" }}>
            Last opened 3 weeks ago · 12 pages
          </div>
          <div style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>
            Match reason: sketch + "purple cover with title block"
          </div>
        </div>
        <button style={primaryButton} onClick={onOpenFile}>
          Open File
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Flow B — step 4: file opened (slides up into view)                        */
/* -------------------------------------------------------------------------- */

export function FBFileOpenView({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: `translateX(-50%) translateY(${mounted ? "0px" : "80px"})`,
        top: "120px",
        width: "1100px",
        height: "1020px",
        zIndex: 30,
        opacity: mounted ? 1 : 0,
        transition: "opacity 500ms ease, transform 500ms ease",
        ...card,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <span style={tempLabel}>TEMP · fb-file-open</span>
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          width: "40px",
          height: "40px",
          border: "none",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.06)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#1a1a1a",
          zIndex: 2,
        }}
      >
        ×
      </button>

      {/* Document preview */}
      <div style={{ padding: "80px 90px", height: "100%", boxSizing: "border-box", overflowY: "auto" }}>
        <div
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "13px",
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Marketing Strategy Memo
        </div>
        <h1 style={{ ...heading, fontSize: "48px", marginBottom: "20px" }}>
          Unlocking Q4 Growth
        </h1>
        <div
          style={{
            width: "100%",
            height: "360px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #8577ff 0%, #6a5bff 100%)",
            marginBottom: "28px",
          }}
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.75)",
              marginBottom: "16px",
            }}
          >
            {i === 0
              ? "This memo outlines the marketing strategy for the upcoming quarter, with a focus on three pillars: brand, performance, and lifecycle. Each pillar ladders up to the company-wide goal of doubling qualified pipeline while maintaining CAC efficiency."
              : "Temporary body text block — replace with the real document content once assets are exported from Figma. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, nibh id sagittis porta, lectus ligula dapibus nisl, vitae convallis neque arcu vitae purus."}
          </p>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Home toast (after Send Invite)                                            */
/* -------------------------------------------------------------------------- */

export function Toast({ visible, message }: { visible: boolean; message: string }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "60px",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0px" : "12px"})`,
        zIndex: 50,
        opacity: visible ? 1 : 0,
        transition: "opacity 400ms ease, transform 400ms ease",
        pointerEvents: "none",
        background: "rgba(26, 26, 26, 0.95)",
        color: "white",
        padding: "16px 28px",
        borderRadius: "100px",
        fontFamily: "'Google Sans Flex', sans-serif",
        fontSize: "16px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#34c759",
        }}
      />
      {message}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Background dim layer — used over the home content while a chat-attached   */
/*  panel is showing (qa-docs, fb-drawing)                                    */
/* -------------------------------------------------------------------------- */

export function DimLayer({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(10px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 300ms ease",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 20,
      }}
    />
  );
}
