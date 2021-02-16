import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("./containers/home.jsx"))
const Header = lazy(() => import("./components/header.jsx"))
const Products = lazy(() => import("./containers/products.jsx"))
const About = lazy(() => import("./containers/About.jsx"))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">login</Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
