import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Index from "./views/index.jsx";
// import Header from "./components/header.jsx";
// import Home from "./views/home.jsx";
// import Home from "./views/home.jsx";

const Home = lazy(() => import("./views/home.jsx"));
const Header = lazy(() => import("./components/header.jsx"));
const Products = lazy(() => import("./views/products.jsx"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products/:id'>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>login</Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

function About() {
  return <h2>test</h2>;
}
