import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Home from "./components/Home";
import Service from "./components/Service";
import Footer from "./components/Footer";
import About from "./components/About";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Private from "./components/Private";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Private />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
