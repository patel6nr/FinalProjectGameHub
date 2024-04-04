import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Routes/HomePage.jsx';
import Navigation from '../Components/Navigation';
import './index.css'
import App from './App';

const Main = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);