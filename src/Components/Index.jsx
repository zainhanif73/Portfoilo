import React from 'react'
import { useState } from 'react'
import img from "../img/mine-back.png"


function Index() {

  const [zoom, setzoom] = useState(false);

  function ZoomEmail() {
    setzoom(true);
    setTimeout(() => {
      setzoom(false);
    }, 1000)
  }
  return (
    <>
      <div className="hero" id="home">
        <nav >
          <h2 className="logo">Portfo<span>lio</span></h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#service">Skills</a></li>
              <li><a onClick={() => { ZoomEmail() }}>Contact Me</a></li>
            </ul>
            <a className="btn" onClick={() => { ZoomEmail() }} >Hire Me</a>
        </nav>

        <div className="content">
          <h4>Hello, my name is</h4>
          <h1 className='name'> Zain <span>Hanif</span></h1>
          <h3>I'am a Full Stack Web Developer.</h3>
          <div className="newslatter">
            <form>
              <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
              <input type="submit" name="submit" style={{ transform: zoom ? "scale(1.2)" : "" }} value="Lets Start" />
            </form>
          </div>
        </div>
      </div>

      <section className="about" id="about"  style={{marginTop:"1px;"}}>
        <div className="main">
          <img className='Myimg' src={img} alt="Image of me" />
          <div className="about-text">
            <h2 >About Me</h2>
            <h5>Developer <span>& Designer</span></h5>
            <p>I am an assertive, hardworking, and responsible person with strong communication skills, who is confident,
              outgoing, talkative, and works well in a team. I can also use my initiative and adapt well to a new situation. As a
              highly motivated and enthusiastic software engineer, I enjoy working in challenging situations and looking for
              new opportunities.</p>
            <a href="#home" onClick={() => { ZoomEmail() }} style={{ textDecoration: "none", color: 'white' }}><button type="button">Let's Talk</button></a>
          </div>
        </div>
      </section>

      {/* <!-----service section start-----------> */}
      <div className="service" id="testimonial">
        <div className="title ">
          <h2>My Testimonials</h2>
        </div>

        <div className="box" style={{display:"flex" , flexWrap:"wrap"}}>
          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Qazi Hamza Anis </h5>
            <div className="pra">
              <p>"No matter where you put a start it will always get its way out to shine. You are just like that."</p>

              <p style={{ textAlign: "center" }}>
                <a className="button" href="https://www.linkedin.com/in/qazihamzaanis/" target={"_blank"}>Visit Profile</a>
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Ismail Khan </h5>
            <div className="pra">
              <p>"It's been great working with you. I'm so happy for you and your new opportunities. Best of luck."</p>

              <p style={{ textAlign: "center" }}>
                <a className="button" href="https://www.linkedin.com/in/ismail-khan-092696219/" target={"_blank"}>Visit Profile</a>
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Ahsan Yousaf</h5>
            <div className="pra">
              <p>"I am really impressed with his work. He is highly skilled, and also bring strong work ethic to the team."</p>

              <p style={{ textAlign: "center" }}>
                <a className="button" href="https://www.linkedin.com/in/ahsan-yousaf-973687192/" target={"_blank"}>Visit Profile</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Index