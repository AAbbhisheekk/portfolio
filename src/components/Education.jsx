import "./Education.css";

export default function Education() {
  const education = [
    {
      title: "B.E. (ISE)",
      place: "RVITM (2026)",
      score: "CGPA 7",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-college-university-flaticons-flat-flat-icons.png",
    },
    {
      title: "Class XII",
      place: "Sadhana PU College",
      score: "71.5%",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-high-school-education-flaticons-flat-flat-icons.png",
    },
    {
      title: "Class X",
      place: "Sri Chaitanya Techno School",
      score: "70.2%",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-school-education-flaticons-flat-flat-icons.png",
    },
  ];

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <img src={item.image} alt={item.title} className="edu-img" />
            <div className="edu-info">
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <span className="score">{item.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
