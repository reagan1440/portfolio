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
          Web Developer with a portfolio of 22+ web applications, 23 if you count this one! Skilled in a range of front-end technologies including HTML, CSS, and JavaScript frameworks such as React.js, Vue.js, Angular, and Bootstrap. Experienced in back-end development using Node.js, Express.js, and MongoDB/MySQL for database management. Ability to Integrate APIs for enhanced perfomace. A collaborative team player dedicated to delivering high-quality applications <br></br>

Outside of work and school I enjoy playing soccer as well as training younger players!
          </p>
          {/* Button positioned at the bottom-right corner */}
          <button
  className="btn btn-primary btn-bottom-right"
  onClick={() => {
    window.location.href = 'mailto:reaganrl14@gmail.com';
  }}
>
  Get In Touch
</button>
<button className="btn btn-primary btn-resume">
  <a href="https://docs.google.com/document/d/1P8SPYDx4JpSWeVSNrZrFGdGvF2WPbHjAwIc7kPw10Ks/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View my Resume</a>
</button>


</div>
      </div>
      <div className="hero--section--img">
        <img src="./img/computeranimation.gif" alt="Hero Section" />
      </div>
    </section>
  );
}

  
