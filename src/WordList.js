import React from 'react';
import vocab from './vocab.json';
import './WordList.css'
import {Link} from 'react-router-dom';
import description from './description.json'

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
      <div className="big-container">
        <div className="header">
          <h2><Link to="/category"><i class="fas fa-chevron-left" /></Link> หน้าหลัก</h2>
        </div>
        <div className="word-container">
        {(prop.match.params.category === "avoir"||prop.match.params.category === "être"||prop.match.params.category === "allergy"||prop.match.params.category === "ache") &&
                <div><h2 style={{fontFamily: "THSarabunNew",color:"#0174D0",lineHeight:1}}>{description[prop.match.params.category].s1}</h2>
                <h2 style={{fontFamily: "THSarabunNew",color:"#0174D0",lineHeight:1}}>{description[prop.match.params.category].s2}</h2>
                <h2 style={{fontFamily: "THSarabunNew",color:"#0174D0",lineHeight:1}}>{description[prop.match.params.category].s3}</h2>
                <h2 style={{fontFamily: "THSarabunNew",color:"#0174D0",lineHeight:1}}>{description[prop.match.params.category].s4}</h2></div>  
          }
          {words.map((item,id) => {
            return <p><Link to={`/category/${prop.match.params.category}/${id}`}>{item}</Link></p>;
          })}
        </div>
      </div>
    );
  }
  
  export default WordList;