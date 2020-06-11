import React from 'react'
import './Player.scss'

export default function Player(props) {

  function buttonHandler(event) {
    props.incrementScore(props.data.id)
  }

 
  return  <li className='Player'>
              <div className="percentage_coloring" style={{ width: props.data.score + "%"}}>
                  <p>{props.data.name} (score:{props.data.score})
                    <button onClick={buttonHandler}>Increment the score</button>
                  </p>     
              </div>
            </li>
    
}