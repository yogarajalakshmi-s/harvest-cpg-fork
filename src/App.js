import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Factories from "./Components/Factories";
import FactoryPage from "./Components/FactoryPage";
import Logistics from "./Components/Logistics_temp";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/factory/:id" element={<FactoryPage />} />
          <Route path="/factories" element={<Factories />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;