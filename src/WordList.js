import React from 'react';
import vocab from './vocab.json';
import './WordList.css'
import {Link } from 'react-router-dom';


function WordList(prop) {
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
          return <p><Link to={`/${prop.match.params.category}/${id}`}>{item}</Link></p>;
        })}
      </div>
    );
  }
  
  export default WordList;