import React from 'react'
import './App.css';

function Leaderboard(props) {
  const {leaderboard} = props

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>LP</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(player => (
            <tr key={player.summonerId}>
              <td>{player.previousUpdateLadderPosition}</td>
              <td>{player.summonerName}</td>
              <td>{player.ratedRating}</td>
              <td>{player.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )

}


export default Leaderboard;