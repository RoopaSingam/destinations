import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Producsts";
import SignUp from "./components/Pages/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/signup" component={SignUp} />
      </Switch>

      <Footer />
    </Router>
  );
}
