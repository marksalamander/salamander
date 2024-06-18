import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Main from './pages/main'

function App() {
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
