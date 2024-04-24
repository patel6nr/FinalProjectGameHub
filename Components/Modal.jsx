
import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
    const handleReset = () => {
        // Reload the browser window to perform a hard reset
        window.location.reload();
    };

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">{solution}</p>
                    <p>You found the word in {turn} guesses</p>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Unlucky!</h1>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time</p>    
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
        </div>
    )
}