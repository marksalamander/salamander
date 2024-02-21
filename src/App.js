import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage'
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route index element={<Homepage/>} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
