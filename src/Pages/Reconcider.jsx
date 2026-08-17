function ReconsiderIllustration() {
  return (
    <svg viewBox="0 0 220 180" className="w-40 h-32 mx-auto" fill="none">
      {/* Ghost body */}
      <path
        d="M55 130V70c0-22 18-40 40-40s40 18 40 40v60l-10-10-10 10-10-10-10 10-10-10-10 10-10-10-10 10z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Ghost eyes */}
      <circle cx="80" cy="80" r="3" fill="#2E2A26" />
      <circle cx="110" cy="80" r="3" fill="#2E2A26" />
      {/* Ghost worried brow */}
      <path
        d="M70 68c4-4 10-4 14 0"
        stroke="#2E2A26"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 68c4-4 10-4 14 0"
        stroke="#2E2A26"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Ghost mouth (small o) */}
      <ellipse cx="95" cy="95" rx="3" ry="4" fill="#2E2A26" />
      {/* Ghost arm reaching down */}
      <path
        d="M75 120c-6 8-8 18-4 26"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Little sleepy character lying down */}
      <ellipse cx="150" cy="150" rx="34" ry="14" fill="#2E2A26" />
      <circle
        cx="175"
        cy="140"
        r="14"
        fill="#F7C9C9"
        stroke="#2E2A26"
        strokeWidth="2"
      />
      {/* closed sleepy eyes */}
      <path
        d="M168 138c2 2 4 2 6 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M178 138c2 2 4 2 6 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* teardrop */}
      <path
        d="M167 143c-1.5 2-1.5 5 0 6.5s3.5 1.5 5 0 1.5-4.5 0-6.5-3.5-2-5 0z"
        fill="#7EC8E3"
      />

      {/* zzz */}
      <text
        x="185"
        y="115"
        fontSize="10"
        fill="#2E2A26"
        fontFamily="sans-serif"
      >
        z
      </text>
      <text x="192" y="105" fontSize="8" fill="#2E2A26" fontFamily="sans-serif">
        z
      </text>
    </svg>
  );
}

export default function ReconsiderDialog({
  title = "Ek aur baar soch lo!",
  subtitle = "Kyu aisa kar rahi ho, plzz maan jao",
  onYes = () => {},
  onNo = () => {},
}) {
  return (
    <div className="pink-floral-bg min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center max-w-sm w-full">
        <div className="w-56 rounded-2xl border border-[#f3c8d8] bg-[#fff8fb] p-6 shadow-[0_10px_24px_rgba(216,140,170,0.18)] mb-6">
          <ReconsiderIllustration />
        </div>

        <h2 className="text-2xl font-bold text-[#2E2A26] flex items-center gap-2 justify-center">
          {title}{" "}
          <span role="img" aria-label="pouting face">
            😣
          </span>
        </h2>

        <p className="text-sm text-[#5C5650] mt-2 flex items-center gap-1 justify-center">
          {subtitle}{" "}
          <span role="img" aria-label="pleading">
            🥺
          </span>
        </p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onYes}
            className="love-button px-8 py-2 rounded-full font-medium"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="love-button px-8 py-2 rounded-full font-medium"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
