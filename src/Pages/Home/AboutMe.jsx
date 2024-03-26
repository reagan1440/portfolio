export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">Education</h1>
            <div className="education">
              <p className="hero--section-description">
                <strong>Spartanburg Methodist College</strong> — Computer Science<br />
                August 2022-2023<br />
                Student Athlete<br />
                Relevant coursework: Intro to Computer Science, Algorithmic Design
              </p>
              <p className="hero--section-description">
                <strong>University of Miami</strong> — Full Stack Web Development Bootcamp (EdX)<br />
                August 2023-2024
              </p>
            </div>
            <div className="skills">
              <h1 className="skills-section--heading">Other Technical Skills</h1>
              <ul>
                <li>RESTful APIs, State, PWA</li>
                <li>Concepts: MVC (model-view-controller), ORM (object-relational-mapping), OOP (object oriented programming)</li>
                <li>Version Control: Git, GitHub, GitLab</li>
                <li>Other Tools: Visual Studio Code, npm, Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  