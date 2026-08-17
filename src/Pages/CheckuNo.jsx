import { useRef, useState } from "react";
import Reconcider from "./Reconcider";
import CuddleIllustration from "./CuddleIllustration";
import LoveMessage from "./LoveMessage";

export default function ChikuSticker() {
  const stickerRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showReconcider, setShowReconcider] = useState(false);
  const [showCuddleIllustration, setShowCuddleIllustration] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);

  const handlePointerDown = (e) => {
    const rect = stickerRef.current.getBoundingClientRect();

    setDragging(true);

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    stickerRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  if (showLoveMessage) {
    return <LoveMessage />;
  }

  if (showCuddleIllustration) {
    return <CuddleIllustration onYes={() => setShowLoveMessage(true)} />;
  }

  if (showReconcider) {
    return (
      <Reconcider
        onNo={() => setShowCuddleIllustration(true)}
        onYes={() => setShowLoveMessage(true)}
      />
    );
  }

  return (
    <div className="pink-floral-bg">
      <div
        ref={stickerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="fixed left-1/2 top-1/2 z-50 w-[340px] cursor-grab select-none rounded-2xl border border-[#f3c8d8] bg-[#ffe9df] px-6 py-8 text-center active:cursor-grabbing"
        style={{
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          touchAction: "none",
        }}
      >
        {/* Sticker */}
        <div className="mb-4 flex justify-center">
          <svg
            viewBox="0 0 220 200"
            className="h-[140px] w-[140px] object-contain"
            fill="none"
          >
            {/* body */}
            <ellipse
              cx="110"
              cy="150"
              rx="42"
              ry="34"
              fill="#FFFFFF"
              stroke="#2E2A26"
              strokeWidth="2.5"
            />

            {/* legs */}
            <ellipse cx="78" cy="185" rx="12" ry="14" fill="#2E2A26" />
            <ellipse cx="142" cy="185" rx="12" ry="14" fill="#2E2A26" />

            {/* bow tie */}
            <path d="M96 158l-12-8v16z" fill="#2E2A26" />
            <path d="M124 158l12-8v16z" fill="#2E2A26" />
            <circle cx="110" cy="158" r="4" fill="#2E2A26" />

            {/* head */}
            <circle
              cx="110"
              cy="90"
              r="55"
              fill="#FFFFFF"
              stroke="#2E2A26"
              strokeWidth="2.5"
            />

            {/* ears */}
            <circle cx="70" cy="50" r="16" fill="#2E2A26" />
            <circle cx="150" cy="50" r="16" fill="#2E2A26" />

            {/* eye patches */}
            <ellipse
              cx="85"
              cy="90"
              rx="16"
              ry="20"
              fill="#2E2A26"
              transform="rotate(-15 85 90)"
            />
            <ellipse
              cx="135"
              cy="90"
              rx="16"
              ry="20"
              fill="#2E2A26"
              transform="rotate(15 135 90)"
            />

            {/* eyes */}
            <circle cx="88" cy="90" r="4" fill="#FFFFFF" />
            <path
              d="M128 90c3-3 8-3 11 0"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* blush */}
            <circle cx="65" cy="112" r="10" fill="#F0A8A8" opacity="0.6" />
            <circle cx="155" cy="112" r="10" fill="#F0A8A8" opacity="0.6" />

            {/* nose + mouth */}
            <ellipse cx="110" cy="108" rx="5" ry="4" fill="#2E2A26" />
            <path
              d="M100 118c4 4 16 4 20 0"
              stroke="#2E2A26"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* arms */}
            <ellipse
              cx="60"
              cy="150"
              rx="12"
              ry="18"
              fill="#FFFFFF"
              stroke="#2E2A26"
              strokeWidth="2"
              transform="rotate(-15 60 150)"
            />
            <ellipse
              cx="160"
              cy="150"
              rx="12"
              ry="18"
              fill="#FFFFFF"
              stroke="#2E2A26"
              strokeWidth="2"
              transform="rotate(15 160 150)"
            />
          </svg>
        </div>

        <h2 className="text-[22px] font-bold text-black">
          Please think again! 😐
        </h2>

        <p className="mt-3 text-[13px] text-gray-600">
          itni jaldi na matt boly wifey 🥺
        </p>

        <div className="mt-4 flex justify-center gap-5">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            className="love-button rounded-md px-5 py-2 text-sm text-gray-700 shadow-sm"
          >
            Yes
          </button>

          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setShowReconcider(true)}
            className="love-button rounded-md px-5 py-2 text-sm text-gray-700 shadow-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
