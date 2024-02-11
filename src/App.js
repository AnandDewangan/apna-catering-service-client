import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
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
          <Route path="" element={<Home />} />
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
