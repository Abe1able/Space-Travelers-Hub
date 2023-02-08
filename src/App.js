import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/navbar";
import Rockets from "./components/rockets/rocketlist";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
