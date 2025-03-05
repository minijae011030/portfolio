import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Result from "./Home/Result";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState({ dog: 11, cat: 9 });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/result" element={<Result votes={votes} />} />
      </Routes>
    </Router>
  );
}

export default App;
