import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Category from './pages/Category';
import Difficulty from './pages/Difficulty';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz/category" component={Category} />
        <Route path="/quiz/difficulty" component={Difficulty} />
        <Route path="/quiz/:id" component={Quiz} />
        <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
