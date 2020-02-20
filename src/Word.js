import React from 'react';
import vocab from './vocab.json';

function Word(prop) {
    return (
      <div>
        <h1>{vocab[prop.match.params.category][prop.match.params.index].word}</h1>
        <h2>{vocab[prop.match.params.category][prop.match.params.index].meaning}</h2>
      </div>
      
    );
  }
  
  export default Word;
  