import React from 'react';
import './Leaderboard.css';

interface LeaderboardEntry {
  username: string;
  netWorth: number;
  time: string;
}

const LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    username: "BusinessMaster",
    netWorth: 15000000,
    time: "1h 45m",
  },
  {
    username: "CapitalistKing",
    netWorth: 12500000,
    time: "2h 15m",
  },
  {
    username: "WealthWarrior",
    netWorth: 11000000,
    time: "2h 30m",
  },
  {
    username: "MoneyMaker",
    netWorth: 9500000,
    time: "3h 0m",
  },
  {
    username: "FinanceFreak",
    netWorth: 8000000,
    time: "3h 15m",
  },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <div className="leaderboard-cell rank">#</div>
          <div className="leaderboard-cell username">Username</div>
          <div className="leaderboard-cell net-worth">Net Worth</div>
          <div className="leaderboard-cell time">Time</div>
        </div>
        {LEADERBOARD_DATA.map((entry, index) => (
          <div key={index} className="leaderboard-row">
            <div className="leaderboard-cell rank">{index + 1}</div>
            <div className="leaderboard-cell username">{entry.username}</div>
            <div className="leaderboard-cell net-worth">${entry.netWorth.toLocaleString()}</div>
            <div className="leaderboard-cell time">{entry.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
