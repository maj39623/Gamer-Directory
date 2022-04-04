import React from "react";
import { Route, Routes } from "react-router-dom";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Style
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
