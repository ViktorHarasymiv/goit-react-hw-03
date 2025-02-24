import React from 'react'

import { VscAccount } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";


import './tile.css'

function Tile({ data: {id, name, number},onDelete}) {
  return (
    <>
    <div className="tile__info">
        <span className='tile__name'><VscAccount  style={{fontSize: '.9em', marginRight: '6px'}} />{name}</span>
        <span><BsTelephone style={{fontSize: '.9em', marginRight: '6px'}} />{number}</span>
    </div>
    <div className="tile__button">
        <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
    </>
  )
}

export default Tile