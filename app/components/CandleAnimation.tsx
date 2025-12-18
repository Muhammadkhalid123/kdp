import Image from 'next/image';

export default function CandleAnimation() {
  return (
    <>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="candle-container">
          {/* Unlit candle image */}
          <Image
            src="/candle-unlit.png"
            className="candle-image candle-unlit"
            alt="Unlit candle"
            fill
            priority
          />

          {/* Lit candle image */}
          <Image
            src="/candle-lit.png"
            className="candle-image candle-lit"
            alt="Lit candle"
            fill
            priority
          />

          <div className="flame-glow"></div>
        </div>
      </div>

      <style jsx>{`
        .candle-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          aspect-ratio: 3 / 4;
        }

        .candle-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .candle-unlit {
          opacity: 1;
          animation: fadeOut 0.8s ease-in-out 1.5s forwards;
        }

        .candle-lit {
          opacity: 0;
          animation: fadeIn 0.8s ease-in-out 1.5s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .flame-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 200, 100, 0.3) 0%, transparent 70%);
          opacity: 0;
          animation: glowAppear 0.8s ease-in-out 1.5s forwards, flicker 2s ease-in-out 2.3s infinite;
        }

        @keyframes glowAppear {
          to {
            opacity: 1;
          }
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @media (max-width: 968px) {
          .candle-container {
            max-width: 300px;
          }
        }
      `}</style>
    </>
  );
}
