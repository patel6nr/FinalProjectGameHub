import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';


const Navigation = () => {
    return (
        <div className='navbar'>
            <Link className="nav-button" to="/">Home</Link>
            <Link className='nav-button' to="/Rps">RockPaperScissors</Link>
            <Link className='nav-button' to="/TicTacToe">TicTacToe</Link>
            <Link className='nav-button' to="/Snake">Snake</Link>
            <Link className='nav-button' to="/Wordle">Wordle</Link>
        </div>
    );
}

export default Navigation;