import AllPlayers from "./components/AllPlayers";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<AllPlayers />} />
      </Routes>
    </>
  );
}

export default App;
