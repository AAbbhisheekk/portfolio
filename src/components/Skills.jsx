import { useState } from "react";
import "./Skills.css";

export default function Skills() {
  // Add icons/images for each skill
  const skills = [
    { name: "C", img: "https://img.icons8.com/color/48/c-programming.png", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "Java", img: "https://img.icons8.com/color/48/java-coffee-cup-logo.png", link: "https://www.java.com/" },
    { name: "JavaScript", img: "https://img.icons8.com/color/48/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", img: "https://img.icons8.com/color/48/python.png", link: "https://www.python.org/" },
    { name: "SQL", img: "https://img.icons8.com/ios-filled/50/000000/database.png", link: "https://en.wikipedia.org/wiki/SQL" },
    { name: "MERN Stack", img: "https://img.icons8.com/color/48/react-native.png", link: "https://www.mongodb.com/mern-stack" },
    { name: "Next.js", img: "https://img.icons8.com/fluency/48/nextjs.png", link: "https://nextjs.org/" },
    { name: "PostgreSQL", img: "https://img.icons8.com/color/48/postgreesql.png", link: "https://www.postgresql.org/" },
    { name: "Data Structures", img: "https://img.icons8.com/color/48/source-code.png", link: "#" },
    { name: "OS", img: "https://img.icons8.com/color/48/linux--v1.png", link: "#" },
    { name: "CN", img: "https://img.icons8.com/color/48/networking-manager.png", link: "#" },
    { name: "OOPS", img: "https://img.icons8.com/color/48/classroom.png", link: "#" },
    { name: "DBMS", img: "https://img.icons8.com/color/48/database.png", link: "#" },
    { name: "VS Code", img: "https://img.icons8.com/color/48/visual-studio-code-2019.png", link: "https://code.visualstudio.com/" },
    { name: "Eclipse", img: "https://img.icons8.com/ios-filled/50/000000/java-eclipse.png", link: "https://www.eclipse.org/" },
    { name: "Jupyter", img: "https://img.icons8.com/fluency/48/jupyter.png", link: "https://jupyter.org/" },
    { name: "GitHub", img: "https://img.icons8.com/ios-glyphs/48/github.png", link: "https://github.com/" },
    { name: "Tableau", img: "https://img.icons8.com/color/48/tableau-software.png", link: "https://www.tableau.com/" },
    { name: "Power BI", img: "https://img.icons8.com/color/48/power-bi.png", link: "https://powerbi.microsoft.com/" }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleClick = (skill) => {
    window.open(skill.link, "_blank");
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <h3>{skill.name}</h3>
            <button className="skill-btn" onClick={() => handleClick(skill)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
