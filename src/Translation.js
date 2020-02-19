import React from 'react';
import vocab from './vocab.json';


function Translation() {
    function getWords(){
      const words = [];
      for (let index = 0; index < vocab.animals.length; index++) {
        words.push({word : vocab.animals[index].word,meaning : vocab.animals[index].meaning});
        
      }
      return words
    }
     const words = getWords();
      return (
        <div className="container">
          {console.log(words)}
        </div>
      );
    }
    
    export default Translation;