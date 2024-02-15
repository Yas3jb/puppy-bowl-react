import AllPlayers from "./components/AllPlayers";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<AllPlayers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
