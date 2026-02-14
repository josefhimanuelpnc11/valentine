import { useEffect, useRef, useState } from 'react'
import ConfirmationPage from './components/ConfirmationPage'
import Landing from './components/Landing'
import SplashScreen from './components/SplashScreen'
import ValentineDecor from './components/ValentineDecor'
import jokes from './data/jokes.json'
import './App.css'

type Screen = 'splash' | 'landing' | 'confirmation'

function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [selectedMessage, setSelectedMessage] = useState('')
  const splashTimerRef = useRef<number | null>(null)

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
      {screen === 'confirmation' && <ConfirmationPage message={selectedMessage} />}
    </main>
  )
}

export default App
