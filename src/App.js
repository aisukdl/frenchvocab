import React from 'react';
import './App.css';
import Category from './Category';
import Section1 from './Section1';
import Translation from './Translation';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Word from './Word'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Category"><Section1 /></Route>
          {/* <Translation /> */}
          <Route path="/Word"><Word /></Route>
          <Route path="/"><Category /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
