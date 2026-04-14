import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import TheQuackeningProject from "./Projects/TheQuackeningProject";
import EnchantedBitesProject from "./Projects/EnchantedBitesProject";
import TwoDKnightProject from "./Projects/2DKnightProject";
import VRBartendingProkject from "./Projects/VRBartendingProject";
import InventorySystemProject from "./Projects/InventorySystemProject";
import LittleGooberProject from "./Projects/LittleGooberProject";

function App() { 
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/the-quackening" element={<TheQuackeningProject />} />
        <Route path="/projects/enchanted-bites" element={<EnchantedBitesProject />} />
        <Route path="/projects/2d-knight" element={<TwoDKnightProject />} />
        <Route path="/projects/vr-bartending-game" element={<VRBartendingProkject />} />
        <Route path="/projects/tetris-inventory-system" element={<InventorySystemProject />} />
        <Route path="/projects/little-goober" element={<LittleGooberProject />} />
      </Routes>
    </HashRouter>
  );
}

export default App;