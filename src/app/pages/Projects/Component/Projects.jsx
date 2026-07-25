import React from "react";
import portfolioImg from "./assets/MyPortfolio_Home_Page.png";
import portfolioImg2 from "./assets/MyPortfolio_Home_Page2.png";
import restaurantImg from "./assets/Restaurant_Home_Page.JPG";
import academyImg from "./assets/FurkhanAcademy_Home_Page.JPG";
import creativeTimeImg from "./assets/CreativeTime_Home_Page.png";
import html from "./assets/HTML.png";
import css from "./assets/CSS.png";
import bootstrap from "./assets/Bootstrap.png";
import js from "./assets/JavaScript.png";
import react from "./assets/React.png";
import ts from "./assets/TypeScript.png";

const projectsData = [
  {
    title: "My Portfolio",
    img: portfolioImg,
    desc: "This is my portfolio site to showcase my skills and projects.",
    tech: [html, css, bootstrap, js, react],
    github: "https://github.com/Mohd-Furkhan/www.mohammedfurkhan.com",
    live: "https://your-new-portfolio-url.com",

    portfolioLinks: [
      {
        name: "Old Portfolio Website",
        url: "https://mohd-furkhan.github.io/www.mohammedfurkhan.com/",
      },
      {
        name: "New Portfolio Website",
        url: "https://mohd-furkhan.github.io/portfolio",
      },
    ],

    col: "col-lg-6",
  },
  {
    title: "Restaurant Site Frontend",
    img: restaurantImg,
    desc: "One page online restaurant site (frontend only).",
    tech: [html, css, bootstrap, js],
    github: "https://github.com/Mohd-Furkhan/www.landmarkfamilyrestaurant.com",
    live: "https://mohd-furkhan.github.io/www.landmarkfamilyrestaurant.com/",
    col: "col-lg-6",
  },
  {
    title: "Academy Site Frontend",
    img: academyImg,
    desc: "Multi-page online learning platform (frontend only).",
    tech: [html, css, bootstrap],
    github: "https://github.com/Mohd-Furkhan/www.furkhanacademy.com",
    live: "https://mohd-furkhan.github.io/www.furkhanacademy.com/",
    col: "col-lg-6",
  },
  {
    title: "CreativeTime",
    img: creativeTimeImg,
    desc: "Designed and developed the official company web application in React JS CreativeTime attendance software is web and mobile based software solution to track and manage employees' paid time-off, vacation, sick days or other custom time-off types..",
    tech: [html, css, bootstrap, js, react, ts],
    live: "https://portal.creativetime.app/jsDevboxatt/auth",
    col: "col-lg-6",
  },
];

function Projects() 
{
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h1 className="text-center mb-5">Projects Showcase</h1>

        <div className="row">
          {projectsData.map((project, index) => (
            <div className={`${project.col} mb-4`} key={index}>
              <div className="card h-100 shadow-sm border border-white">
                {project.title === "My Portfolio" ? (
                  <div
                    id={`carousel${index}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="4000"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={portfolioImg}
                          className="d-block w-100 card-img-top"
                          alt="Portfolio 1"
                        />
                      </div>

                      <div className="carousel-item">
                        <img
                          src={portfolioImg2}
                          className="d-block w-100 card-img-top"
                          alt="Portfolio 2"
                        />
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel${index}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel${index}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                ) : (
                  <img
                    className="card-img-top"
                    src={project.img}
                    alt={project.title}
                  />
                )}

                <div className="card-body bg-light text-dark text-center d-flex flex-column align-items-center">
                  <h5 className="card-title fw-bold text-decoration-underline">
                    {project.title}
                  </h5>

                  <p className="card-text">
                    {project.desc}
                    <br />
                    <strong>Tech stack:</strong>
                    <br />
                    {project.tech.map((tech, i) => (
                      <img
                        key={i}
                        src={tech}
                        width="35"
                        className="me-2 mt-2"
                        alt="tech"
                      />
                    ))}
                  </p>

                  <div className="mt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bn5 btn btn-sm btn-dark me-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>{" "}
                        GitHub
                      </a>
                    )}

                    {project.title !== "My Portfolio" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bn5 btn btn-sm btn-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>{" "}
                        Live
                      </a>
                    ) : (
                      <div className="btn-group dropdown ms-2">
                        <button
                          type="button"
                          className="fs-6 btn btn-sm btn-dark dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                          </svg>{" "}
                          Live
                        </button>

                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="https://mohd-furkhan.github.io/www.mohammedfurkhan.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Old Portfolio Website
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item"
                              href="https://mohd-furkhan.github.io/portfolio"
                              target="_blank"
                              rel="noreferrer"
                            >
                              New Portfolio Website
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
