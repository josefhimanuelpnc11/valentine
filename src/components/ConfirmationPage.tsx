import { useMemo } from 'react'

type ConfirmationPageProps = {
  message: string
  videoSrc: string
}

const CONFETTI_COLORS = ['#E56B86', '#C68642', '#f0b8c4', '#4A2F27', '#e8a87c']

function ConfirmationPage({ message, videoSrc }: ConfirmationPageProps) {
  const confettiBits = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${(i * 1.7) % 100}%`,
        delay: `${(i % 12) * 80}ms`,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        width: 6 + (i % 4) * 3,
        height: 10 + (i % 5) * 4,
        drift: (i % 3 === 0) ? 'confettiFallLeft' : (i % 3 === 1) ? 'confettiFallRight' : 'confettiFallCenter',
      })),
    [],
  )

  return (
    <section className="confirm-fullscreen" aria-label="Confirmation page">
      {/* Fullscreen confetti burst */}
      <div className="confetti-fullscreen" aria-hidden="true">
        {confettiBits.map((bit) => (
          <span
            key={bit.id}
            className="confetti-piece"
            style={{
              left: bit.left,
              animationDelay: bit.delay,
              animationName: bit.drift,
              backgroundColor: bit.color,
              width: `${bit.width}px`,
              height: `${bit.height}px`,
            }}
          />
        ))}
      </div>

      <div className="confirm-inner">
        <article className="confirm-card">

          <div className="confirm-check" aria-hidden="true">
            <svg viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="24" stroke="var(--primary)" strokeWidth="2.5" className="confirm-circle" />
              <path d="M15 27l7 7 15-15" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="confirm-tick" />
            </svg>
          </div>

          <p className="confirm-tag cfm-r cfm-r1">Confirmed</p>
          <h2 className="confirm-title cfm-r cfm-r2">You made it in.</h2>
          <p className="confirm-msg cfm-r cfm-r3">{message}</p>
        </article>

        <section className="song-card cfm-r cfm-r4" aria-label="Valentine song">
          <p className="song-tag">One more thing —</p>
          <h3 className="song-title">Hey there My Valentine, Here's a Song for you!</h3>
          <p className="song-artist">Free Love by Honne!</p>
          <div className="video-frame">
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              preload="auto"
            >
              Your browser does not support the video element.
            </video>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ConfirmationPage
