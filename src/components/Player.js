import React from 'react'


export default function Player(props) {

  function buttonHandler(event) {
    console.log('you clicked the button in player')
    props.incrementScore(props.data.id)
  }

  return <div>
   <li>
     <p>{props.data.name} (score:{props.data.score})</p>
     <button onClick={buttonHandler}>Increment the score</button>
   </li>
  </div>
}