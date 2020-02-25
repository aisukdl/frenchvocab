import React from 'react';
import vocab from './vocab.json';
import './section1.css'
import { Route,Link } from 'react-router-dom';


function Section1(prop) {
  function getWords(prop){
    const words = [];
    for (let index = 0; index < vocab[prop.match.params.category].length; index++) {
      words.push(vocab[prop.match.params.category][index].word);
      
    }
    return words
  }
   const words = getWords(prop);
    return (
      <div className="container">
        {words.map((item,id) => {
          return <p><Link to={`/:category/${id}`}>{item}</Link></p>;
        })}
      </div>
    );
  }
  
  export default Section1;