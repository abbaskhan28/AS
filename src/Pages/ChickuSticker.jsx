import { useRef, useState } from "react";

function ShyCatIllustration() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="mx-auto mb-4 h-[130px] w-[130px]"
      fill="none"
    >
      <ellipse
        cx="110"
        cy="95"
        rx="55"
        ry="48"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
      />
      <path
        d="M70 58l-12-26 26 13z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M148 55l6-27 22 18z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M74 52l4-11 10 6z" fill="#D9D6CE" />
      <path d="M152 50l3-12 11 9z" fill="#D9D6CE" />
      <path d="M65 75c8-6 18-4 20 4-6 4-16 3-20-4z" fill="#D9D6CE" />
      <path d="M158 68c6-4 14-2 15 5-5 3-13 1-15-5z" fill="#D9D6CE" />
      <circle cx="90" cy="95" r="7" fill="#2E2A26" />
      <circle cx="93" cy="92" r="2" fill="#FFFFFF" />
      <circle cx="140" cy="93" r="7" fill="#2E2A26" />
      <circle cx="143" cy="90" r="2" fill="#FFFFFF" />
      <circle cx="72" cy="108" r="7" fill="#F0A8A8" opacity="0.7" />
      <circle cx="158" cy="106" r="7" fill="#F0A8A8" opacity="0.7" />
      <path
        d="M105 118c3 3 7 3 10 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="110" cy="123" rx="4" ry="5" fill="#E88A9A" />
      <ellipse
        cx="175"
        cy="130"
        rx="16"
        ry="20"
        fill="#F0B8AE"
        stroke="#2E2A26"
        strokeWidth="2"
        transform="rotate(20 175 130)"
      />
    </svg>
  );
}

export default function ChikuSticker({ onNoClick }) {
  const stickerRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    if (e.target.closest("button")) return;

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

  return (
    <div className="pink-floral-bg">
      <div
        ref={stickerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="fixed left-1/2 top-1/2 z-50 w-[300px] cursor-grab select-none rounded-xl border border-[#f3c8d8] bg-[#ffe9df] p-6 text-center shadow-lg active:cursor-grabbing"
        style={{
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          touchAction: "none",
        }}
      >
        {/* Chiku illustration (original artwork) */}
        <ShyCatIllustration />

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-900">Do you love me? 🥰</h2>

        <p className="mt-2 text-sm text-gray-500">Chiku is all yours</p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            className="love-button rounded-md px-5 py-2 text-sm shadow-sm"
          >
            Yes
          </button>

          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onNoClick}
            className="love-button rounded-md px-5 py-2 text-sm shadow-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
