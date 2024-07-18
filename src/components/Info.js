import React from "react"
import picture from '../images/picture.jpg';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Info() {
    return (
        <div className="info">
            <img src={picture} className="profile-pic" alt="profile-pic"/>
            <h3>Rodrigo Guerrero</h3>    
            <h5>Software Engineer</h5>
            <div className="buttons-section">
                <a
                    className="linkedin-link"
                    href="https://www.linkedin.com/in/rodrigozerbini/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineLinkedin size={36}/>
                </a>
                <a
                    className="github-link"
                    href="https://github.com/rodrigozerbini"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={54}/>
                </a>
            </div>
        </div>
        
    )
}