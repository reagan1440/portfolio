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
            Web Developer with over 22 applications developed, 23 If you count this one! Skilled in
            front-end and back-end technologies to deliver responsive and
            high-performing digital solutions. Experienced in utilizing RESTful
            APIs for seamless data integration and management. Collaborative
            team player with a strong focus on meeting project requirements and
            delivering exceptional user experiences.
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

          
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/computeranimation.gif" alt="Hero Section" />
      </div>
    </section>
  );
}

  
