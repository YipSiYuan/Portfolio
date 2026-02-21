import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
