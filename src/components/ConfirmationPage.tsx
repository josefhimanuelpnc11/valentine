import { useMemo } from 'react'

type ConfirmationPageProps = {
  message: string
}

const CONFETTI_COLORS = ['#E56B86', '#C68642']

function ConfirmationPage({ message }: ConfirmationPageProps) {
  const confettiBits = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${6 + index * 6.3}%`,
        delay: `${(index % 7) * 70}ms`,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
      })),
    [],
  )

  return (
    <section className="confirm-fullscreen" aria-label="Confirmation page">
      <div className="confirm-inner">
        <article className="confirm-card">
          <div className="confetti-layer" aria-hidden="true">
            {confettiBits.map((bit) => (
              <span
                key={bit.id}
                className="confetti"
                style={{ left: bit.left, animationDelay: bit.delay, backgroundColor: bit.color }}
              />
            ))}
          </div>

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
            <iframe
              src="https://www.youtube.com/embed/w-EoAXhKOLk?autoplay=1"
              title="Free Love by Honne"
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default ConfirmationPage
