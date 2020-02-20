import React from 'react';
import vocab from './vocab.json';
import './section1.css'
import { Route,Link } from 'react-router-dom';


function Section1() {
  function getWords(prop){
    const words = [];
    for (let index = 0; index < vocab.food.length; index++) {
      words.push(vocab.food[index].word);
      
    }
    return words
  }
   const words = getWords();
    return (
      <div className="container">
        {words.map(item => {
          return <p><Link to="/food/0">{item}</Link></p>;
        })}
      </div>
    );
  }
  
  export default Section1;