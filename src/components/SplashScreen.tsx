function SplashScreen() {
  return (
    <section className="splash-fullscreen" aria-label="Loading screen">
      <div className="splash-inner">
        <div className="splash-heart-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M32 56S6 38.5 6 20.5C6 12 13 5 21 5c5 0 9.5 3 11 7 1.5-4 6-7 11-7 8 0 15 7 15 15.5C58 38.5 32 56 32 56z"
              fill="var(--primary)"
            />
          </svg>
        </div>
        <p className="splash-eyebrow">Valentine Game Lobby</p>
        <h1 className="splash-headline">
          <span className="splash-word splash-w1">Happy</span>{' '}
          <span className="splash-word splash-w2">Valentine,</span>
          <br />
          <span className="splash-word splash-w3">Let's</span>{' '}
          <span className="splash-word splash-w4">Play</span>{' '}
          <span className="splash-word splash-w5">Games</span>
        </h1>
        <div className="splash-bar" aria-hidden="true">
          <div className="splash-bar-fill" />
        </div>
        <p className="splash-sub">loading your gift storyline…</p>
      </div>
    </section>
  )
}

export default SplashScreen
