export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Reagan Lowe</p>
          {/* <div class="picture--of--me">
        <img src="path/to/your/image.jpg" alt="Reagan's Image" />
      </div> */}
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
       
Web Developer with over 22 applications developed, 23 If you count this one! Skilled in front-end and back-end technologies to deliver responsive and high-performing digital solutions. Experienced in utilizing APIs for data integration and management. Collaborative team player with a strong focus on meeting project requirements and delivering exceptional user experiences. <br></br>

In my free time, I enjoy playing soccer and working in freelance web development projects. I find joy in staying active in the field and continuously improving my skills in creating new projects.
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

  
