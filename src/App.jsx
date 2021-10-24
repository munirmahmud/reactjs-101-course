import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import { AboutUs, Home, Services } from "./pages";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </>
  );
};

export default App;
