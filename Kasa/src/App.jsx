import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
