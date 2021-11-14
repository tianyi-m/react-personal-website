import Quietness from "./blogs/quietness"
import Main from "./main/main"
import PplPsych from "./blogs/pplPsych"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/quietness" element={<Quietness/>} />
          <Route path="/peopleinpsychward" element={<PplPsych/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
