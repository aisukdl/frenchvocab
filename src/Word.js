import React from 'react';
import vocab from './vocab.json';
import {Link} from 'react-router-dom';
import './Word.css'

function Word(prop) {
    return (
      <div>
        <div className="header">
          <h2><Link to={`/category/${prop.match.params.category}`}><i class="fas fa-chevron-left" /></Link> {prop.match.params.category}</h2>
        </div>
        <div className="word-container">
        <h1 style={{fontFamily: "Source Sans Pro"}}>{vocab[prop.match.params.category][prop.match.params.index].word}</h1>
        <h4 style={{fontFamily: "Source Sans Pro"}}>{vocab[prop.match.params.category][prop.match.params.index].phonetic}</h4>
        <h3 style={{fontFamily: "THSarabunNew"}}>{vocab[prop.match.params.category][prop.match.params.index].thaimeaning}</h3>
        <h3  style={{fontFamily: "Source Sans Pro"}}>{vocab[prop.match.params.category][prop.match.params.index].englishmeaning}</h3>
        </div>
      </div>
      
    );
  }
  
  export default Word;
  