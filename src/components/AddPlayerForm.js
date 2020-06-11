import React, { useState } from 'react'

export default function AddPlayerForm(props) {
  const[newPlayer, set_newPlayer] = useState('')

  function inputHandler(event) {
    set_newPlayer(event.target.value)
  }

  function buttonHandler() {
    props.addNewPlayer(newPlayer)
    set_newPlayer('')
  }

  return <div className="AddPlayerForm">
        <input value={newPlayer} onChange={inputHandler} />
<button onClick={buttonHandler}>Add new player {newPlayer}</button>
        </div>
}

