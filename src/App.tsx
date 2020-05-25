import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { HomeScreen } from './screens/HomeScreen/components/HomeScreen';
import { MainScreen } from './screens/MainScreen/components/MainScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomeScreen />} />
        <Route exact path="/main" render={() => <MainScreen />} />
      </Switch>
    </div>
  );
}

export default App;
