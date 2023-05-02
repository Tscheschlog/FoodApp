import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import MainScreen from './pages/main';
import LoginScreen from './pages/login';
import ForgotScreen from './pages/forgotPassword';
import SignupScreen from './pages/signup';
import DiceScreen from './pages/games/diceRoll';
import CoinScreen from './pages/games/coinFlip';
import HighOrLowScreen from './pages/games/highOrLow';
import RockPaperScissorScreen from './pages/games/rockPaperSc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot" element={<ForgotScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/dice" element={<DiceScreen />} />
        <Route path="/coin" element={<CoinScreen />} />
        <Route path="/highorlow" element={<HighOrLowScreen />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissorScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
