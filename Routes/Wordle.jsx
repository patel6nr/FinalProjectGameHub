import { Fragment, useState, useEffect } from 'react'
import "./Wordle.css";
import { default as WordleComponent } from "./../Components/Wordle"


const Wordle = () => {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9000/solutions')
            .then(res => res.json())
            .then(json => {
                // random int between 0 & 14
                const randomSolution = json[Math.floor(Math.random() * json.length)]
                setSolution(randomSolution.word)
            })
    }, [setSolution])
    return (
        <Fragment>
            <header>
                <h1>Wordle</h1>
            </header>
            <main>
                {solution && <WordleComponent solution={solution} />}

            </main>
        </Fragment>
    )
}

export default Wordle