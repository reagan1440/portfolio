export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              Web Developer with over 22 web applications developed. Skilled in front-end and back-end technologies to deliver responsive and high-performing digital solutions. Experienced in utilizing RESTful APIs for seamless data integration and management. Collaborative team player with a strong focus on meeting project requirements and delivering exceptional user experiences.
            </p>
            <div className="hero--section-description">
              <h1 className="section--title">Education</h1>
              <p>
                <strong>Spartanburg Methodist College</strong> — Computer Science<br />
                August 2022-2023<br />
                Student Athlete<br />
                Relevant coursework: Intro to Computer Science, Algorithmic Design
              </p>
              <p>
                <strong>University of Miami</strong> — Full Stack Web Development Bootcamp (EdX)<br />
                August 2023-2024
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  