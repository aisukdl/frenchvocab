import React from 'react';
import './App.css';
import Category from './Category'
import Section1 from './Section1'
import Translation from './Translation'

function App() {
  return (
    <div className="App">
      {/* <i className="fas fa-plus fa-3x" style={{color:"red"}}></i> */}
      <Category />
      <Section1 />
      <Translation />
    </div>
  );
}

export default App;
