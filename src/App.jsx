import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import { AboutUs, Home, Services } from "./pages";

const App = () => {
  const arr = ["A", "B", "C"];
  const person = {
    name: "Munir Mahmud",
    age: 44,
    favoriteFood: "Khichuri",
    address: {
      streat: "123, Streat Name",
      city: "Dhaka",
    },
  };

  const [first, second] = arr;
  console.log(first, second);

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
