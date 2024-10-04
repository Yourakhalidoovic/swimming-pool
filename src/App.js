import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tracking from "./containers/Tracking";
import Affiliation from "./containers/Affiliation";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/tracking" component={Tracking} />
      <Route path="/affiliation" component={Affiliation} />
      <Route path="/" exact component={Home} />

      <Footer />
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Swimming App</h1>
      <p>This is the home page of the swimming app.</p>
    </div>
  );
};

export default App;
