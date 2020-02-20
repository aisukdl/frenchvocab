import React from 'react';
import vocab from './vocab.json';

function Word(prop) {
    return (
      <div>
        <h1>{vocab.animals[prop.match.params.words].word}</h1>
        <h2>{vocab.animals[prop.match.params.words].meaning}</h2>
      </div>
      
    );
  }
  
  export default Word;
  