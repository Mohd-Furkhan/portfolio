import { useState } from "react";
import htmlImg from "./assets/HTML.png";
import cssImg from "./assets/CSS.png";
import bootstrapImg from "./assets/Bootstrap.png";
import jsImg from "./assets/JavaScript.png";
import reactImg from "./assets/React.png";
import reactRouterImg from "./assets/React Router.png";
import reactNativeImg from "./assets/React.png";
import javaImg from "./assets/Java.png";
import pythonImg from "./assets/Python.png";
import cSharpImg from "./assets/C-Sharp.png";
import nodeImg from "./assets/NodeJS.png";
import expressImg from "./assets/ExpressJS.png";
import sqlServerImg from "./assets/Microsoft SQL Server.png";
import vsCodeImg from "./assets/Visual Studio Code.png";
import gitHubImg from "./assets/GitHub.png";
import gitImg from "./assets/Git.png";
import postmanImg from "./assets/Postman.png";
import fileZillaImg from "./assets/FileZilla.png";
import ChatGPTImg from "./assets/ChatGPT.png";
import GitHubCopilotImg from "./assets/GitHub Copilot.png";
import ClaudeImg from "./assets/Claude.png";
import GoogleGeminiImg from "./assets/Google Gemini.png";
import PerplexityImg from "./assets/Perplexity.png";
import "./Skills.css";

function Skills() 
{

  const [category, setCategory] = useState("All");

  const skills = [
    // All Skills
    { name: "HTML", img: htmlImg, type: "All" },
    { name: "CSS", img: cssImg, type: "All" },
    { name: "Bootstrap", img: bootstrapImg, type: "All" }, 
    { name: "JavaScript", img: jsImg, type: "All" },
    { name: "React", img: reactImg, type: "All" },
    { name: "React Router", img: reactRouterImg, type: "All" },
    { name: "React Native", img: reactNativeImg, type: "All" },
    { name: "Java", img: javaImg, type: "All" },
    { name: "Python", img: pythonImg, type: "All" },
    { name: "C-Sharp", img: cSharpImg, type: "All" },
    { name: "Node JS", img: nodeImg, type: "All" },
    { name: "Express JS", img: expressImg, type: "All" },
    { name: "Microsoft SQL Server", img: sqlServerImg, type: "All" },
    { name: "VS Code", img: vsCodeImg, type: "All" },
    { name: "GitHub", img: gitHubImg, type: "All" },
    { name: "Git", img: gitImg, type: "All" },
    { name: "Postman", img: postmanImg, type: "All" },
    { name: "FileZilla", img: fileZillaImg, type: "All" },
    { name: "ChatGPT", img: ChatGPTImg, type: "All" },
    { name: "GitHub Copilot", img: GitHubCopilotImg, type: "All" },
    { name: "Claude", img: ClaudeImg, type: "All" },
    { name: "Google Gemini", img: GoogleGeminiImg, type: "All" },
    { name: "Perplexity", img: PerplexityImg, type: "All" },

    // Frontend Skills
    { name: "HTML", img: htmlImg, type: "Frontend" },
    { name: "CSS", img: cssImg, type: "Frontend" },
    { name: "Bootstrap", img: bootstrapImg, type: "Frontend" }, 
    { name: "JavaScript", img: jsImg, type: "Frontend" },
    { name: "React", img: reactImg, type: "Frontend" },
    { name: "React Router", img: reactRouterImg, type: "Frontend" },
    { name: "React Native", img: reactNativeImg, type: "Frontend" },

    // Backend Skills
    { name: "Java", img: javaImg, type: "Backend" },
    { name: "Python", img: pythonImg, type: "Backend" },
    { name: "C-Sharp", img: cSharpImg, type: "Backend" },
    { name: "Node JS", img: nodeImg, type: "Backend" },
    { name: "Express JS", img: expressImg, type: "Backend" },

    // Database Skills
    { name: "Microsoft SQL Server", img: sqlServerImg, type: "Database" },

    // Tools Skills
    { name: "VS Code", img: vsCodeImg, type: "Tools" },
    { name: "GitHub", img: gitHubImg, type: "Tools" },
    { name: "Git", img: gitImg, type: "Tools" },
    { name: "Postman", img: postmanImg, type: "Tools" },
    { name: "FileZilla", img: fileZillaImg, type: "Tools" },

    // AI Chatbots Skills
    { name: "ChatGPT", img: ChatGPTImg, type: "AI Chatbots" },
    { name: "GitHub Copilot", img: GitHubCopilotImg, type: "AI Chatbots" },
    { name: "Claude", img: ClaudeImg, type: "AI Chatbots" },
    { name: "Google Gemini", img: GoogleGeminiImg, type: "AI Chatbots" },
    { name: "Perplexity", img: PerplexityImg, type: "AI Chatbots" }
  ];

  return (
    <>
      <h1 className="text-center">My skills</h1>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-3 py-5 flex-wrap">
        <button className="bn5" onClick={() => setCategory("All")}>All</button>
        <button className="bn5" onClick={() => setCategory("Frontend")}>Frontend</button>
        <button className="bn5" onClick={() => setCategory("Backend")}>Backend</button>
        <button className="bn5" onClick={() => setCategory("Database")}>Database</button>
        <button className="bn5" onClick={() => setCategory("Tools")}>Tools</button>
        <button className="bn5" onClick={() => setCategory("AI Chatbots")}>AI Chatbots</button>
      </div>

      {/* Skills */}
      <div className="container">
        <div className="row g-4 justify-content-center">

          {skills
            .filter(skill => skill.type === category)
            .map((skill, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card text-center p-3">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="img-fluid mx-auto"
                    width={50}
                  />
                  <h6 className="py-3">{skill.name}</h6>
                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  );
}

export default Skills;