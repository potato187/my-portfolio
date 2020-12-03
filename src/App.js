import Header from "components/header";
import Home from "components/pages/Home";
import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Redirect from="/" to="/home" exact />
      </BrowserRouter>
    </>
  );
}

export default App;
