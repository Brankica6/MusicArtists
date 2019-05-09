import React from 'react';
import '../css/Search.css';


const Search = ({searchChange}) => {
  return (
    <section className="search">
      <input type='text' placeholder='Search Artists...' onChange={searchChange}/>
    </section>
  )
}

export default Search;
