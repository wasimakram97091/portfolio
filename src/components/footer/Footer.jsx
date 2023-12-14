import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Wasim Akram
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wasim-akram-542960289/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/wasimakram97091" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/__heywasim?t=LVW2jKR66fCUC1G8YNUO8w&s=09" target="_blank" rel="noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/__hey.wasim?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noreferrer">
          <FaSquareInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; WA 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
