import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import About from "../../About/Component/About.jsx";
import Projects from "../../Projects/Component/Projects.jsx";
import Skills from "../../Skills/Component/Skills.jsx";
import Contact from "../../Contact/Component/Contact.jsx";
import Resume from "../../Resume/Component/Resume.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="top" className="container-fluid col-xxl-8 px-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://mohd-furkhan.github.io/www.mohammedfurkhan.com/assets/Furkhan.png"
              alt="This is my image"
              width={800}
              className="responsive-img img-fluid"
            />
          </div>
          <div id="top" className="col-lg-6">
            <h1 className="display-5">
              Hey there! I’m Mohammed Furkhan.
            </h1>
            <p className="lead">
              A Computer Science graduate, and a passionate &nbsp;
              <br />
              <span className="rainbow-text">
                <Typewriter
                  words={[
                    "Frontend Developer.",
                    "Web Developer.",
                    "React Developer.",
                    "Software Developer.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
            <p>
              I enjoy turning ideas into clean, responsive, and high-performance
              websites. Always excited to build smooth user experiences with
              modern web technologies.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/contact">
                <button type="button" className="bn5 btn btn-lg">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M4 17h16"
                    />
                  </svg>
                  &nbsp;Hire Me
                </button>
              </Link>
              <a href="/assets/Mohammed Furkhan.pdf" target="_blank" download>
                <button type="button" className="bn5 btn btn-lg">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                  &nbsp;Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-5">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="rainbow-btn border-0 bg-transparent p-0"
  style={{ position: "fixed", bottom: "1rem", right: "1rem", zIndex: 1000 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="currentColor"
    className="bi bi-arrow-up-circle-fill rainbow-text"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
  </svg>
</button>


    </>
  );
}

export default Home;