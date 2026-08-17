function LoveIllustration() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="w-32 h-24 sm:w-40 sm:h-32 mx-auto"
      fill="none"
    >
      <ellipse
        cx="85"
        cy="115"
        rx="38"
        ry="40"
        fill="#A9A29B"
        stroke="#2E2A26"
        strokeWidth="2.5"
      />
      <path
        d="M58 88l-10-20 22 11z"
        fill="#A9A29B"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M100 80l3-22 18 16z"
        fill="#A9A29B"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M62 82l4-10 9 6z" fill="#F0B8AE" />
      <ellipse cx="70" cy="108" rx="2.5" ry="3" fill="#2E2A26" />
      <path
        d="M62 118c2 2 5 2 7 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="60" cy="114" rx="4" ry="2.5" fill="#F0A8A8" opacity="0.7" />

      <ellipse
        cx="150"
        cy="110"
        rx="40"
        ry="38"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
      />
      <path
        d="M124 78l-6-20 20 11z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M165 76l4-21 18 15z"
        fill="#FFFFFF"
        stroke="#2E2A26"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M127 80l3-10 9 6z" fill="#F7C9C9" />
      <path d="M167 78l2-11 10 8z" fill="#F7C9C9" />
      <path
        d="M138 104c2.5 2.5 5 2.5 7.5 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M156 102c2.5 2.5 5 2.5 7.5 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M146 114c2 2 5 2 7 0"
        stroke="#2E2A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="132" cy="112" rx="4.5" ry="3" fill="#F0A8A8" opacity="0.7" />
      <ellipse cx="168" cy="110" rx="4.5" ry="3" fill="#F0A8A8" opacity="0.7" />

      <path
        d="M108 55c-4-6-13-3-13 3 0 5 13 14 13 14s13-9 13-14c0-6-9-9-13-3z"
        fill="#E88A9A"
        className="heart-pulse"
        style={{ transformOrigin: "108px 62px" }}
      />
      <path
        d="M185 45c-2.5-3.5-8-1.5-8 1.5 0 3 8 8.5 8 8.5s8-5.5 8-8.5c0-3-5.5-5-8-1.5z"
        fill="#E88A9A"
        opacity="0.85"
        className="heart-pulse"
        style={{ transformOrigin: "185px 50px", animationDelay: "0.4s" }}
      />
    </svg>
  );
}

function FloatingBit({ left, size, delay, duration, emoji }) {
  return (
    <span
      className="floating-bit"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
      aria-hidden="true"
    >
      {emoji}
    </span>
  );
}

const FLOATERS = [
  { left: 5, size: 16, delay: 0, duration: 7, emoji: "💗" },
  { left: 15, size: 12, delay: 1.5, duration: 9, emoji: "✨" },
  { left: 28, size: 18, delay: 3, duration: 6.5, emoji: "💕" },
  { left: 45, size: 14, delay: 0.8, duration: 8, emoji: "✨" },
  { left: 60, size: 20, delay: 2.2, duration: 7.5, emoji: "💗" },
  { left: 72, size: 13, delay: 4, duration: 6, emoji: "💕" },
  { left: 85, size: 17, delay: 1, duration: 8.5, emoji: "✨" },
  { left: 93, size: 15, delay: 3.5, duration: 7, emoji: "💗" },
];

function AnimatedHeadline({ text, startDelay = 0.7, stagger = 0.09 }) {
  const words = text.split(" ");
  return (
    <h2 className="text-lg sm:text-2xl font-bold text-[#2E2A26] flex flex-wrap items-center gap-x-2 gap-y-1 justify-center leading-snug px-2">
      {words.map((word, i) => (
        <span
          key={i}
          className="word-pop inline-block"
          style={{ animationDelay: `${startDelay + i * stagger}s` }}
        >
          {word}
        </span>
      ))}
      <span
        className="word-pop wiggle-emoji inline-block"
        style={{ animationDelay: `${startDelay + words.length * stagger}s` }}
        role="img"
        aria-label="wink"
      >
        😉
      </span>
    </h2>
  );
}

function AnimatedSalutation({ text, startDelay = 1.4, stagger = 0.045 }) {
  const letters = text.split("");
  return (
    <p
      className="text-[#B5556E] text-xl sm:text-2xl leading-snug"
      style={{ fontFamily: "'Caveat', cursive" }}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          className="letter-pop inline-block"
          style={{ animationDelay: `${startDelay + i * stagger}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </p>
  );
}

function TypewriterNote({ text, startDelay = 2.2, stagger = 0.11 }) {
  const words = text.split(" ");
  return (
    <p
      className="text-[#5C5650] text-base sm:text-lg mt-2 leading-relaxed text-left"
      style={{ fontFamily: "'Caveat', cursive" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word-write inline-block"
          style={{ animationDelay: `${startDelay + i * stagger}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

export default function YouLoveMePage({
  headline = "I knew it! You love me a lot",
  wifeName = "Mere Samia",
  note = "Meri jan ma apky bagher ni reh sakta. Ap meri zindagi ma sabse zarori hn. Ap sy  meri har aik khushi ha. Ap meri Wifey hn jana or mere sab sy achi dost bhi hn jana meri partner hn jana , mera gulab hn mera munnah , mere rasmalai ha meri jan ,  mera sukoon hn yaram. Ap sy mere zindagi ha jana. Ap meri duao ma hoti hn mera bacha.",
}) {
  const salutation = `Dear ${wifeName},`;
  const signOffDelay = 2.2 + note.split(" ").length * 0.11 + 0.3;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#FCE4E4] p-4 sm:p-6 overflow-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translateY(-420px) rotate(20deg); opacity: 0; }
        }
        .floating-bit {
          position: absolute;
          bottom: -20px;
          animation-name: floatUp;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          pointer-events: none;
        }
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }
        .heart-pulse {
          animation: heartPulse 1.4s ease-in-out infinite;
        }
        @keyframes catBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .cat-bounce {
          animation: catBounce 3s ease-in-out infinite;
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pop-in {
          animation: popIn 0.6s ease-out both;
        }
        @keyframes cardRise {
          0% { transform: translateY(24px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .card-rise {
          animation: cardRise 0.7s ease-out 0.3s both;
        }
        @keyframes wiggleEmoji {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
        .wiggle-emoji {
          animation: wiggleEmoji 1.8s ease-in-out infinite 2.4s;
        }
        @keyframes mailBob {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-4px) rotate(6deg); }
        }
        .mail-bob {
          display: inline-block;
          animation: mailBob 2s ease-in-out infinite;
        }

        /* Text animations */
        @keyframes wordPop {
          0% { transform: translateY(14px) scale(0.9); opacity: 0; }
          70% { transform: translateY(-2px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .word-pop {
          animation: wordPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes letterPop {
          0% { transform: translateY(10px) rotate(-6deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
        .letter-pop {
          animation: letterPop 0.35s ease-out both;
        }
        @keyframes wordWrite {
          0% { opacity: 0; transform: translateY(4px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .word-write {
          animation: wordWrite 0.35s ease-out both;
        }
        @keyframes signOffFade {
          0% { opacity: 0; transform: translateX(-6px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .sign-off {
          animation: signOffFade 0.6s ease-out both;
        }
      `}</style>

      {FLOATERS.map((f, i) => (
        <FloatingBit key={i} {...f} />
      ))}

      <div className="relative flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm">
        <div className="pop-in cat-bounce bg-white rounded-2xl border border-[#f3c8d8] shadow-md p-4 sm:p-6 mb-4 sm:mb-6 w-44 sm:w-56">
          <LoveIllustration />
        </div>

        <AnimatedHeadline text={headline} />

        <div className="card-rise relative mt-6 sm:mt-8 w-full bg-white rounded-2xl border border-[#f3c8d8] shadow-md px-5 py-6 sm:px-7 sm:py-7 flex flex-col">
          <span
            className="mail-bob absolute -top-3 -left-3 text-xl sm:text-2xl"
            role="img"
            aria-label="heart"
          >
            💌
          </span>

          <AnimatedSalutation text={salutation} />

          <TypewriterNote text={note} />

          <p
            className="sign-off text-[#B5556E] text-xl sm:text-2xl mt-4 self-end text-right"
            style={{
              fontFamily: "'Caveat', cursive",
              animationDelay: `${signOffDelay}s`,
            }}
          >
            — Yours always
          </p>
        </div>
      </div>
    </div>
  );
}
