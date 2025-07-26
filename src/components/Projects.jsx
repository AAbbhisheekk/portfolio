import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Sens-ai",
      desc: "AI-powered career platform using Next.js, PostgreSQL, Gemini API, Tailwind CSS.",
      img: "https://images.unsplash.com/photo-1682685797710-3c20829183c5?q=80&w=600&auto=format", // Replace with your image
    },
    {
      title: "PrintXchange",
      desc: "MERN-based platform for college resource sharing.",
      img: "https://images.unsplash.com/photo-1581093588401-22d036b2c4be?q=80&w=600&auto=format", // Replace with your image
    },
    {
      title: "Google Ads Campaign Automation",
      desc: "Automated ad campaign creation using Node.js, GPT-4o, MongoDB, Google Ads API.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format", // Replace with your image
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
