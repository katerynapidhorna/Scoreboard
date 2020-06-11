import React, {useState, useEffect} from 'react';
import Player from '../Player/Player';
import AddPlayerForm from '../AddPlayerForm';
import Axios from 'axios'


export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");

  const[players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 43 },
  ])
  
// reset onslick handler
function resetButtonHandler() {
  const resetScoresList = players.map((player)=>{
    player.score = 0;
    return player;
  })
  setPlayers(resetScoresList)
}

function rendomizeButtonHandler() {
  const rendomizedList = players.map((player)=>{
    player.score = Math.round(Math.random() * (101 - 0) + 0)
    return player;
  })
  setPlayers(rendomizedList)
}

 //change score
 function incrementScore(playerId) {
    const updatedList = players.map((player)=>{
      if(player.id === playerId) {
        player.score = player.score + 1
      }
      return player;
    })
    setPlayers(updatedList)
}

  //add new player through AddPlayerForm
  function addNewPlayer(name) {
    if(!name) {
    } else {
      setPlayers([...players, {
        name:name,
        score: 0,
        id: 333
      }])
    }
  }
 
   //change sorting order of players
   function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }

  function compare_name(player_a,player_b) {
    return player_a.name.localeCompare(player_b.name)
  }

  function change_sorting(event) {
   // console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  }

  const sortedPlayers = [...players];
    if(sort_by === 'score') {
      sortedPlayers.sort(compare_score);
    } else {
      sortedPlayers.sort(compare_name)
    } 

  return (
    <div>
      <h2>Scoreboard</h2>
        <p>Order:
            <select onChange={change_sorting}>
              <option value="score">Sort by score</option>
              <option value="name">Sort by name</option>
            </select>
            <button onClick={resetButtonHandler}>Reset scores</button>
            <button onClick={rendomizeButtonHandler}>Rendomize</button>
        </p>
      <ul>
        {sortedPlayers.map((player,index)=>{
          player.id = index;
          return (
            <Player key={index} 
                   data={player}
                   incrementScore={incrementScore}
             />
          )
        })}
      </ul>
      <AddPlayerForm  addNewPlayer={addNewPlayer}/>
      </div>
  )
}