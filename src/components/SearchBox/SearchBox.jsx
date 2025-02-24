import React from 'react'

import { CiSearch } from "react-icons/ci";



import style from './style.module.css';

function SearchBox({value, setSearch}) {
  return (
    <div className={style.search}>
       <CiSearch />
       <input type='search' placeholder='Search by name' value={value} onChange={e => setSearch(e.target.value)} className={style.search__input}></input>
    </div>
  )
}

export default SearchBox