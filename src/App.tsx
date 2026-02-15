import { useEffect, useRef, useState } from 'react'
import ConfirmationPage from './components/ConfirmationPage'
import Landing from './components/Landing'
import SplashScreen from './components/SplashScreen'
import ValentineDecor from './components/ValentineDecor'
import jokes from './data/jokes.json'
import './App.css'

const VIDEO_SRC = `${import.meta.env.BASE_URL}honne-free-love.mp4`

type Screen = 'splash' | 'landing' | 'confirmation'

function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [selectedMessage, setSelectedMessage] = useState('')
  const splashTimerRef = useRef<number | null>(null)

  /* Start buffering the video immediately (during splash & landing)
     so it's already cached when the confirmation page renders. */
  useEffect(() => {
    const vid = document.createElement('video')
    vid.preload = 'auto'
    vid.muted = true
    vid.src = VIDEO_SRC
    vid.style.display = 'none'
    document.body.appendChild(vid)
    return () => {
      vid.src = ''
      vid.remove()
    }
  }, [])

  useEffect(() => {
    splashTimerRef.current = window.setTimeout(() => {
      setScreen('landing')
    }, 2800)

    return () => {
      if (splashTimerRef.current !== null) {
        window.clearTimeout(splashTimerRef.current)
      }
    }
  }, [])

  const handleYesSelected = (message: string) => {
    setSelectedMessage(message)
    setScreen('confirmation')
  }

  return (
    <main className="app-shell">
      <ValentineDecor />
      {screen === 'splash' && <SplashScreen />}
      {screen === 'landing' && <Landing jokes={jokes} onYes={handleYesSelected} />}
      {screen === 'confirmation' && <ConfirmationPage message={selectedMessage} videoSrc={VIDEO_SRC} />}
    </main>
  )
}

export default App
