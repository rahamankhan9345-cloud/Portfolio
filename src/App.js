import "./App.css";
import { FaHome, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import profile from "./ABD (1).png";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <div className="first-part">
          <div className="navigation">
            <div className="home">
              <a href="#Home" className="ancor">
                <FaHome />
              </a>
            </div>
            <div className="education">
              <a href="#edu" className="ancor">
                EDUCATION
              </a>
            </div>
            <div className="skills">
              <a href="#skill" className="ancor">
                SKILLS
              </a>
            </div>
            <div className="contact">
              <a href="#contact" className="ancor">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
      

      <div className="home-section" id="Home">
        <div className="image-container">
          <div className="image-section">
            <img src={profile} alt="profile" className="my-profile" />
          </div>
          <div className="profile-detail">
            <h1 className="intro">
              Hi, I'm <span className="my-name">Abdur Rahman</span>
            </h1>
            <h2 className="my-occup">
              Full Stack Developer | Python Developer
            </h2>
            <p className="my-summery">
              I love building creative and efficient web applications, combining
              design and technology to craft meaningful user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-page" id="edu">
        <div className="education-section">
          <h1 className="edu-title">Education</h1>
          <div className="edu-container">
            <div className="edu-card">
              <h2 className="edu-degree">Higher Secondary Education</h2>
              <h3 className="edu-institution">
                Christ The King Matric Higher Secondary School
              </h3>
              <p className="edu-year">2019 - 2021</p>
              <p className="edu-description">
                Completed with First Mark in Computer Science stream with a
                strong foundation in programming and mathematics.
              </p>
            </div>

            <div className="edu-card">
              <h2 className="edu-degree">
                Bachelor of Arts & Science (BCA) in Computer Application
              </h2>
              <h3 className="edu-institution">Prist Deemed to Be University</h3>
              <p className="edu-year">2021 - 2025</p>
              <p className="edu-description">
                Focused on AI, IoT, and Software Development. Developed multiple
                machine learning and full-stack projects during my academic journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section" id="skill">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-container">
          {[
            ["HTML", "95%", "html"],
            ["CSS", "90%", "css"],
            ["JavaScript", "70%", "js"],
            ["React", "80%", "react"],
            ["Python", "75%", "python"],
          ].map(([skill, percent, bar]) => (
            <div className="skill-card" key={skill}>
              <div className="skill-info">
                <h2 className="skills">{skill}</h2>
                <span className="percentage">{percent}</span>
              </div>
              <div className="progress-bar">
                <div className={`progress ${bar}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <p>Let’s connect! Feel free to reach out for collaborations or inquiries.</p>

        <form className="contact-form">
          <label className="name">Name</label>
          <input type="text" placeholder="Your Name" required />

          <label className="email">Email</label>
          <input type="email" placeholder="Your Email" required />

          <label className="message">Message</label>
          <textarea rows="5" placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Mobile No: +91 8148941316</p>
          <p>Email: rahamankhan9345@gmail.com</p>
          <p>Location: Kumbakonam - 612001</p>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/ab_.d._r_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/bdalrhmnalrhmn.445632"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/abdur-rahaman-439b42277/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
