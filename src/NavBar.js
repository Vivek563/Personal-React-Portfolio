import React from "react";

const NavBar = () => {
  return (
    <div>
      <header class="header">
        <nav class="navbar">
          <a href="/#" class="nav-logo">
          <img class="logo" src="./assests/viv_pic.png" alt="" />
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#skills" class="nav-link">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/vivek563" class="nav-link">
                Projects
              </a>
            </li>

            <li class="nav-item">
              <a href="#cocurriculars" class="nav-link">
                Android Studio
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
