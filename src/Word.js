import React from 'react';

function Word(prop) {
    return (
      <div>
        <h1>{prop.match.params.word}</h1>
        <h2>{prop.match.params.meaning}</h2>

      </div>
      
    );
  }
  
  export default Word;
  