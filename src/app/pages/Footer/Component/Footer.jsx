import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css"

function Footer()
{
    return(
        <>
            <footer>
                <ul class="nav justify-content-center border-bottom pb-3 mb-2 mt-2">
                    <li className="nav-item footer-btn">
                    <Link className="nav-link text-light" to="/">
                        Home
                    </Link>
                    </li>
                    <li class="nav-item footer-btn">
                    <Link className="nav-link text-light" to="/about">
                        About
                    </Link>
                    </li>
                    <li class="nav-item footer-btn">
                    <Link className="nav-link text-light" to="/projects">
                        Projects
                    </Link>
                    </li>
                    <li class="nav-item footer-btn">
                    <Link className="nav-link text-light" to="/skills">
                        Skills
                    </Link>
                    </li>
                </ul>
                <p class="text-center text-light">
                    © Copyright 2026 All rights reserved. <br /> 
                    <span>Designed by &lt; Mohammed Furkhan /&gt;</span>
                </p>
            </footer>
        </>
    )
}

export default Footer