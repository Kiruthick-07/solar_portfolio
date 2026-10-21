const WA_NUMBER = "919597424158"; // country code + number
const WA_MESSAGE = "Hello! I'm interested in your solar energy solutions. Please share more details.";

export default function WhatsApp() {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <>
      <a
        id="whatsapp-float"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          fill="none"
        >
          <path
            fill="#fff"
            d="M24 4C12.95 4 4 12.95 4 24c0 3.55.96 6.88 2.63 9.74L4 44l10.55-2.6A19.87 19.87 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4Z"
          />
          <path
            fill="#25D366"
            d="M24 6.4C14.28 6.4 6.4 14.28 6.4 24c0 3.27.9 6.33 2.46 8.95L6.8 41.2l8.52-2.04A17.56 17.56 0 0 0 24 41.6c9.72 0 17.6-7.88 17.6-17.6S33.72 6.4 24 6.4Z"
          />
          <path
            fill="#fff"
            d="M33.6 28.48c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.04-.75-3.88-2.4-1.44-1.28-2.4-2.86-2.68-3.34-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.78-.8-1.08-.82-.28-.01-.6-.01-.92-.01-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.14.5 2.04.79 2.74 1.01 1.15.36 2.2.31 3.03.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56Z"
          />
        </svg>
      </a>

      <style>{`
        #whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.15);
          text-decoration: none;
          animation: wa-bounce 2.4s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        #whatsapp-float:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 28px rgba(37,211,102,0.6), 0 3px 10px rgba(0,0,0,0.18);
          animation-play-state: paused;
        }

        /* Ripple ring */
        #whatsapp-float::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37,211,102,0.35);
          animation: wa-ripple 2.4s ease-in-out infinite;
        }

        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(-6px); }
        }

        @keyframes wa-ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.8); opacity: 0;   }
        }

        @media (max-width: 480px) {
          #whatsapp-float {
            width: 52px;
            height: 52px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
}
