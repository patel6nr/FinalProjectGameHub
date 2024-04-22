import { useState } from 'react'
import '../src/App.css'
import { WelcomeScreen as Welcome } from '../src/screens/WelcomeScreen'
import Game from '../src/screens/GameScreen'

function RPSPage() {
  const [name, setName] = useState(`Bearcat`)
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <>
      {
        gameStarted
        ? <Game name={name}/>
        : <Welcome name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)}/>
      }
    </>
  )
}

export default RPSPage