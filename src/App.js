import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quizz:id" component={Quizz} />
          <Home />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
