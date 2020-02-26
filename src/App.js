import React from 'react';
import './App.css';
import Category from './Category';
import WordList from './WordList';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Word from './Word'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:category/:index" component={Word} />
          <Route path="/:category" component={WordList} />
          <Route path="/"><Category /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
