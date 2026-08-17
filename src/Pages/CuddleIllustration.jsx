import { useRef, useState, useCallback } from "react";

// Original illustration — two cuddling cats, drawn from scratch (no copyrighted assets).
function CuddleIllustration() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="w-32 h-24 sm:w-40 sm:h-32 mx-auto"
      fill="none"
    >
      <ellipse
        cx="90"
        cy="130"
        rx="42"
        ry="34"
        fill="#8C8C8C"
        stroke="#2E2A26"
        strokeWidth="2.5"
      />
      <path
        d="M60 100l-8-18 20 10z"
        fill="#8C8C8C"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M95 92l4-20 16 14z"
        fill="#8C8C8C"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="72" cy="112" r="2.5" fill="#2E2A26" />
      <ellipse cx="88" cy="108" rx="2.5" ry="3" fill="#2E2A26" />
      <path
        d="M78 122c2 2 5 2 7 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="66" cy="118" rx="4" ry="2.5" fill="#F0A8A8" opacity="0.6" />
      <rect
        x="78"
        y="140"
        width="16"
        height="12"
        rx="3"
        fill="#BFE3F2"
        stroke="#2E2A26"
        strokeWidth="1.5"
      />
      <path
        d="M94 143c4-1 5 5 0 6"
        stroke="#2E2A26"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="140"
        cy="110"
        rx="34"
        ry="30"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
      />
      <path
        d="M118 84l-6-16 18 9z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M150 80l4-17 15 12z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M120 86l3-9 8 5z" fill="#F7C9C9" />
      <path d="M151 82l2-9 8 7z" fill="#F7C9C9" />
      <circle cx="128" cy="106" r="2.5" fill="#2E2A26" />
      <circle cx="150" cy="104" r="2.5" fill="#2E2A26" />
      <path
        d="M134 116c2 2 5 2 7 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="122" cy="112" rx="4" ry="2.5" fill="#F0A8A8" opacity="0.6" />
      <ellipse cx="156" cy="110" rx="4" ry="2.5" fill="#F0A8A8" opacity="0.6" />
      <ellipse
        cx="108"
        cy="128"
        rx="8"
        ry="6"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2"
      />
      <path d="M180 70l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#F7C9C9" />
    </svg>
  );
}

const BUTTON_W = 90; // approx button width in px, used to keep it inside viewport
const BUTTON_H = 44;
const DANGER_RADIUS = 90; // how close the mouse can get before the button runs

export default function BabyReconsiderDialog({
  title = "Baby man jao na! Kitna bhav khaogi",
  subtitle = "Bhut galat baat hai yrrr",
  onYes = () => {},
}) {
  const [noPos, setNoPos] = useState(null); // null = still in normal flow
  const noBtnRef = useRef(null);

  const moveNoButton = useCallback(() => {
    const padding = 16;
    const maxX = window.innerWidth - BUTTON_W - padding;
    const maxY = window.innerHeight - BUTTON_H - padding;
    const newX = Math.max(padding, Math.random() * maxX);
    const newY = Math.max(padding, Math.random() * maxY);
    setNoPos({ x: newX, y: newY });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (!noBtnRef.current) return;
      const rect = noBtnRef.current.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
      if (dist < DANGER_RADIUS) {
        moveNoButton();
      }
    },
    [moveNoButton],
  );

  return (
    <div
      onMouseMove={handlePointerMove}
      className="pink-floral-bg min-h-screen w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden relative"
    >
      <div className="flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm">
        <div className="w-44 sm:w-56 rounded-2xl border border-[#f3c8d8] bg-[#fff8fb] p-4 sm:p-6 shadow-[0_12px_28px_rgba(216,140,170,0.18)] mb-4 sm:mb-6">
          <CuddleIllustration />
        </div>

        <h2 className="text-lg sm:text-2xl font-bold text-[#2E2A26] flex flex-wrap items-center gap-2 justify-center leading-snug px-2">
          {title}{" "}
          <span role="img" aria-label="crying">
            😭
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#5C5650] mt-2 sm:mt-3 flex items-center gap-1 justify-center px-2">
          {subtitle}{" "}
          <span role="img" aria-label="pleading">
            🥺
          </span>
        </p>

        <div
          className="flex gap-4 mt-5 sm:mt-6 relative"
          style={{ minHeight: BUTTON_H }}
        >
          <button
            onClick={onYes}
            className="love-button px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base"
          >
            Accepting Sorry
          </button>

          <button
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={(e) => e.preventDefault()}
            style={
              noPos
                ? {
                    position: "fixed",
                    left: noPos.x,
                    top: noPos.y,
                    transition: "left 0.15s ease-out, top 0.15s ease-out",
                    zIndex: 50,
                  }
                : undefined
            }
            className="love-button px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
