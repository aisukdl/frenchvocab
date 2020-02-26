import React from 'react';
import './App.css';
import Category from './Category';
import WordList from './WordList';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Word from './Word'
import Home from './Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/category/:category/:index" component={Word} />
          <Route path="/category/:category" component={WordList} />
          <Route path="/category"><Category /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
