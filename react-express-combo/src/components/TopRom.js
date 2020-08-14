import React, { Component, useState } from 'react';
import Search from './Search';
import axios from 'axios';
import Results from './Results';

function TopRom() {

  const [state, setState] = useState({
    s: "",
    resultsfromapi: [],
    selected: {},
  });


  const apiurl = 'https://api.themoviedb.org/3/search/movie?api_key=54a91f8f6f10791019cbee06394e04a8&query=';

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + state.s).then(({data})=>{
let resultsfromapi = data.results;
setState(prevState => {
  return {...prevState , resultsfromapi : resultsfromapi}
})
      });
    }
  }; 
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
    console.log(state.s);
  }


  return (
    
      <div className="App">
      <header>
      </header>
      <main>
        <Search handleInput={handleInput} search ={search}/>
        <Results resultsfromapi={state.resultsfromapi} />
      </main>
    </div>
    
  )
}

export default TopRom;
