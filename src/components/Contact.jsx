import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=800&auto=format"
            alt="Contact Illustration"
          />
        </div>

        <div className="contact-info">
          <p className="contact-text">
            I’m always excited to collaborate on interesting projects and opportunities.
          </p>
          <div className="contact-card">
            <img src="https://img.icons8.com/color/48/000000/apple-mail.png" alt="email" />
            <span>proabhishek2004@gmail.com</span>
          </div>

          <div className="contact-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" />
            <a href="https://github.com/AAbbhisheekk" target="_blank" rel="noreferrer">
              github.com/AAbbhisheekk
            </a>
          </div>

          <div className="contact-card">
            <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/abhishek-shivagirimath-896b21331"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
