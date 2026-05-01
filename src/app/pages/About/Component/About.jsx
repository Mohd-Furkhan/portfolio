import React from "react";
import ProfileImage from "../Component/assets/Profile.jpg";

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">All about me</h1>

      <div className="row align-items-start">
        {/* LEFT SIDE IMAGE */}
        <div className="col-md-5 text-center">
          <img
            src={ProfileImage}
            alt="Mohammed Furkhan Profile"
            className="img-fluid rounded shadow w-100"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-7">
          <p>
            Hi, I'm <strong>Mohammed Furkhan 👋🏻</strong>. I have been a
            <strong> computer enthusiast </strong> since childhood and I enjoy
            creating websites and bringing them live on the Internet.
          </p>

          <p>
            I'm a passionate <strong>React Developer</strong> who loves building
            modern, responsive, and user-friendly web applications.
          </p>

          <p className="mb-4">
            I enjoy working on interactive UI, writing clean and maintainable
            code, and continuously learning new technologies to improve my
            skills.
          </p>

          {/* Experience */}
          <h4 className="mb-3 border-bottom pb-2">Experience:</h4>

          <div className="bn5 card mb-3 shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-decoration-underline">
                Devbox Software Pvt Ltd
              </h6>
              <p>
                <strong>Role:</strong> React Developer
              </p>
              <p>
                <strong>Duration:</strong> July 2023 - Present
              </p>
            </div>
          </div>

          <div className="bn5 card mb-3 shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-decoration-underline">
                Business Web Solutions
              </h6>
              <p>
                <strong>Role:</strong> Full Stack Web Development Intern
              </p>
              <p>
                <strong>Duration:</strong> Nov 2022 - Mar 2023
              </p>
            </div>
          </div>

          {/* Education */}
          <h4 className="mb-3 border-bottom pb-2">Education:</h4>
          <div className="bn5 card mb-4 shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-decoration-underline">
                B.Tech in Computer Science & Engineering - JNTUH
              </h6>
              <p className="card-text">
                <strong>Duration:</strong> 2018 - 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default About;