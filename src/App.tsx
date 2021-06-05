import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC<{}> = () => {

    return (
      <Router>
        <Switch>
          <Route exact path={`/:city`}>
            <Header />            
          </Route>
          <Route path='/'>
            <Search />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;

