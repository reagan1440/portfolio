export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Reagan Lowe</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              <strong>Technical Skills:</strong><br />
              <strong>Programming Languages:</strong> JavaScript, HTML, CSS<br />
              <strong>Front-End Development:</strong> React.js, Vue.js, Angular, Bootstrap<br />
              <strong>Back-End Development:</strong> Node.js, Express.js, RESTful APIs, State, PWA<br />
              <strong>Concepts:</strong> MVC (model-view-controller), ORM (object-relational-mapping), OOP (object oriented programming)<br />
              <strong>Database Management:</strong> MongoDB, MySQL<br />
              <strong>Version Control:</strong> Git, GitHub, GitLab<br />
              <strong>Other Tools:</strong> Visual Studio Code, npm, Heroku
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/pf img.PNG" alt="Hero Section" />
        </div>
      </section>
    );
  }
  
