import React from 'react';
import vocab from './vocab.json';

function Word(prop) {
    return (
      <div>
        <h1>{vocab[prop.match.params.category][prop.match.params.index].word}</h1>
        <h3>{vocab[prop.match.params.category][prop.match.params.index].phonetic}</h3>
        <h2>{vocab[prop.match.params.category][prop.match.params.index].thaimeaning}</h2>
        <h2>{vocab[prop.match.params.category][prop.match.params.index].englishmeaning}</h2>
      </div>
      
    );
  }
  
  export default Word;
  