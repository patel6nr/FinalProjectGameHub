import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from '../Components/Navigation'
import HomePage from '../Routes/HomePage';
import RPSPage from '../Routes/RPSPage';
import TicTacToePage from '../Routes/TicTacToePage';
import SnakeGame from '../Routes/SnakeGame';

function App() {

  return (
    <Router basename='/rps-react'>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rps" element={<RPSPage />} />
        <Route path="/TicTacToe" element={<TicTacToePage />} />
        <Route path="/Snake" element={<SnakeGame />} />
      </Routes>
    </Router>
  )
}

export default App
