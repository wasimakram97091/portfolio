import "./portfolio.css";

import IMG1 from "../../assets/Youtube.png";
import IMG2 from "../../assets/Weather.png";
import IMG3 from "../../assets/todo.png";
import IMG4 from "../../assets/CinepleX.png";
import IMG5 from "../../assets/recipe.png";
import IMG6 from "../../assets/jobCard.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Youtube clone",
      img: IMG1,
      description: "Integrate live chat for real-time interaction, debouncing for smoother UX, caching for optimized performance, and nested comments.",
      technologies: "React.js | JavaScript | Redux toolkit | Tailwind",
      link: "https://youtube-clone-wine-two.vercel.app/",
      github: "https://github.com/wasimakram97091/youtube-clone",
    },
    {
      id: 2,
      title: "CinepleX (Movie app)",
      img: IMG4,
      description: "Implemented user authentication, error handling with Redux, and dynamic client-side routing for enhanced movie-watching experiences.",
      technologies: "React.js | JavaScript | Redux | SASS | R-router",
      link: "https://movie-app-nine-tau.vercel.app/",
      github: "https://github.com/wasimakram97091/movie-app",
    },
    {
      id: 3,
      title: "Weather app",
      img: IMG2,
      description: "Developed responsive weather app with current, daily, and hourly forecasts, intuitive UI, and OpenWeatherAPI integration.",
      technologies: "React.js | JavaScript | SASS",
      link: "https://weather-app-five-psi-68.vercel.app/",
      github: "https://github.com/wasimakram97091/weather-app",
    },
    {
      id: 4,
      title: "TODO list app",
      img: IMG3,
      description: "Built sleek Todo List App in React, featuring user authentication, local storage, and personalized experience.",
      technologies: "React.js | JavaScript | Mock API | SASS",
      link: "https://react-todo-app-khaki-seven.vercel.app/",
      github: "https://github.com/wasimakram97091/react-todo-app",
    },
    {
      id: 5,
      title: "Recipe Finder",
      img: IMG5,
      description: "Crafted a culinary companion: React-based Recipe Finder with intuitive search, detailed recipes, and responsive design.",
      technologies: "React.js | JavaScript | Material UI ",
      link: "https://bejewelled-vacherin-7e310d.netlify.app/",
      github: "https://github.com/wasimakram97091/recipe-finder",
    },
    {
      id: 6,
      title: "Job Portal (Jobs Cards)",
      img: IMG6,
      description: "Revolutionized job applications with dynamic validations, secure Mock API integration, and user-friendly interface for efficiency.",
      technologies: "React.js | JavaScript | Tailwind | Mock API",
      link: "https://react-create-job-dashboard.vercel.app/",
      github: "https://github.com/wasimakram97091/react-createJob-dashboard",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
