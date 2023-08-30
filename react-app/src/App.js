import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestSearch from "./component/TestSearch";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* change TestSearch to Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/testSearch" element={<TestSearch />} />
        {/* <Route path="/TestSearch" element={<Link to="/">To Home</Link>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
