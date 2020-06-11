import React, {useState, useEffect} from 'react';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import Axios from 'axios'


export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");

  const[players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 43 },
  ])
  


 //change score
 function incrementScore(playerId) {
  console.log('player id is: ',playerId)
    const updatedList = players.map((player)=>{
      if(player.id === playerId) {
        player.score = player.score + 1
        console.log('MODIFIED SCORE',player)
      }
      return player;
    })
    console.log('updatedList ' , updatedList )
    setPlayers(updatedList)
}

  //add new player through AddPlayerForm
  function addNewPlayer(name) {
    console.log('AND PLAYERS NOW', players)
    if(!name) {
      console.log('please aad the name')
    } else {
      console.log('I will adding a new player to the array',{name})
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
    console.log("new sort order:", event.target.value);
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









//console.log('players_sorted',players_sorted)
  
  // const URL = 'https://restcountries.eu/rest/v2/all'
  //   useEffect(() => {
  //     async function recievedData() {
  //       const countriesData = await Axios.get(URL);
  //       setCountries(countriesData.data)
  //     }
  //     recievedData()
  //   }, [])