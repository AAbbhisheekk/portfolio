import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Hello, I'm</h2>
        <h1 className="highlight">Abhishek Shivagirimath</h1>
        <p>
          A passionate developer pursuing B.E. in ISE at RV Institute of Technology
          and Management (2026 batch).
        </p>
        <a className="btn" href="/projects">View My Projects</a>
      </div>
      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Developer working"
        />
      </div>
    </div>
  );
}
