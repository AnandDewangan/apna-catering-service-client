import React from "react";
import Hero from "../images/hero.png";
import Service from "./Service";
import About from "./About";
import Menu from "./Menu";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft" id="typing-text">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                    Cooking is an art, and the ingredients are the colors that
                    paint a masterpiece. Quality ingredients are the
                    brushstrokes that create a lasting impression on the palate.
                  </p>
                  <a
                    href="tel:+918963906336"
                    className="btn btn-outline-warning text-success w-50"
                  >
                    📞 Call Now
                  </a>
                  <h3>Tiffin Service Availble in Bilaspur CG</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img src={Hero} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Menu />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
}
