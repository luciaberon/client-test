import React from 'react';
import Header from './components/Header';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC<{}> = () => {

    return (
      <Router>
        <Switch>
          <Route path={`/:city`}>
            <Header />            
          </Route>
        </Switch>
      </Router>
    );
}

export default App;

