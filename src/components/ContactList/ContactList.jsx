import React from 'react'

import './list.css'

import Tile from './Tile/Tile';


function ContactList({initialList, onDelete}) {
  return (
    <div>
        <ul className='tile__list'>
        {initialList.map((list) => {
            return <li key={list.id} className="tile__item"> <Tile data={list} onDelete={onDelete}/> </li>
        })}
        </ul>
    </div>
  )
}

export default ContactList