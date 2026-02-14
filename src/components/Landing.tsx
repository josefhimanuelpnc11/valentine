import { useEffect, useRef, useState } from 'react'
import Announcement from './Announcement'
import ChoiceButtons from './ChoiceButtons'

type LandingProps = {
  jokes: string[]
  onYes: (message: string) => void
}

function Landing({ jokes, onYes }: LandingProps) {
  const [showNoButton, setShowNoButton] = useState(true)
  const [noExiting, setNoExiting] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const yesButtonRef = useRef<HTMLButtonElement>(null)
  const timersRef = useRef<number[]>([])

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timerId) => window.clearTimeout(timerId))
    }
  }, [])

  const handleNo = () => {
    setNoExiting(true)
    setShowAnnouncement(true)
    setShowToast(true)
    yesButtonRef.current?.focus()

    const hideNoTimer = window.setTimeout(() => {
      setShowNoButton(false)
      setNoExiting(false)
    }, 200)

    const toastTimer = window.setTimeout(() => {
      setShowToast(false)
    }, 1800)

    timersRef.current.push(hideNoTimer, toastTimer)
  }

  const handleYes = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    onYes(jokes[randomIndex])
  }

  return (
    <>
      <section className="landing-fullscreen" aria-label="Valentine 2026 gift swap page">
        <div className="landing-inner">
          <div className="landing-badge" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="var(--primary)" strokeWidth="2" opacity="0.4" />
              <text x="24" y="28" textAnchor="middle" fill="var(--primary)" fontSize="18" fontFamily="Righteous">?</text>
            </svg>
          </div>
          <p className="landing-tag land-reveal land-r1">Round One</p>
          <h1 className="landing-headline">
            <span className="land-word land-r2">Happy</span>{' '}
            <span className="land-word land-r3">Valentine</span>{' '}
            <span className="land-word land-r4 land-accent">2026</span>
          </h1>
          <div className="landing-divider" aria-hidden="true"><span /></div>
          <p className="landing-desc land-reveal land-r5">
            One question. Two options. Only one of them actually works.
            <br />
            <span className="landing-hint">Choose carefully — or don't. We both know where this is going.</span>
          </p>

          <ChoiceButtons
            onYes={handleYes}
            onNo={handleNo}
            showNoButton={showNoButton}
            noExiting={noExiting}
            yesRef={yesButtonRef}
          />

          {showAnnouncement && <Announcement message="only can choose yes now aint it." />}
        </div>
      </section>

      {showToast && (
        <div className="toast" role="alert" aria-live="polite">
          System Override Activated
        </div>
      )}
    </>
  )
}

export default Landing
