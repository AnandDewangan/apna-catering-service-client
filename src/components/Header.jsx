import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0 fixed-top">
      <a href="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Anand{" "}
          <span className="text-success">Tiffin & Catering</span>
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <a href="#about" className="nav-item nav-link">
            About
          </a>
          <a href="#services" className="nav-item nav-link">
            Service
          </a>
          <div className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Menu
            </a>
            <div className="dropdown-menu m-0">
              <a href="#menu" className="dropdown-item">
                Food Menu
              </a>
              <a href="#gallary" className="dropdown-item">
                Gallary
              </a>
              <a href="#team" className="dropdown-item">
                Team
              </a>
              <a href="/login" className="dropdown-item">
                Login
              </a>
            </div>
          </div>
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
