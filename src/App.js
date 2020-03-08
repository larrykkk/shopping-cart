import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./views/index.jsx";
import Header from "./components/header.jsx";
import Home from "./views/home.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>login</Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>home</h2>;
// }

function About() {
  return <h2>test</h2>;
}
