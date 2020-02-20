import React from 'react';
import vocab from './vocab.json';
import './section1.css'
import { Route,Link } from 'react-router-dom';


function Section1() {
  function getWords(){
    const words = [];
    for (let index = 0; index < vocab.animals.length; index++) {
      words.push(vocab.animals[index].word);
      
    }
    return words
  }
   const words = getWords();
    return (
      <div className="container">
        {words.map(item => {
          return <p><Link to="/Word">{item}</Link></p>;
        })}
      </div>
    );
  }
  
  export default Section1;