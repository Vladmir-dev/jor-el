import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurLeaderShip from "./pages/OurLeaderShip";
import EthicsCompliance from "./pages/EthicsCompliance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path="our-leadership" element={<OurLeaderShip />} />
          <Route path="ethics-compliance" element={<EthicsCompliance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
