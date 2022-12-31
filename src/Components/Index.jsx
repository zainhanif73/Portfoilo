import React from 'react'
import { useState } from 'react'
import img from "../img/main-img.png"


function Index() {
  
  const [change, setChange] = useState(false);

  return (
    <>
      <div className="hero" id="home">
        <nav>
          <h2 className="logo">Portfo<span>lio</span></h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#service">Skills</a></li>
            <li><a href="#contact-me">Contact Me</a></li> 
          </ul>
          <a className="btn" onClick={()=>{setChange(true)}} >Hire Me</a>
        </nav>

        <div className="content">
          <h4>Hello, my name is</h4>
          <h1> Zain <span>Hanif</span></h1>
          <h3>I'am a Full Stack Web Developer.</h3>
          <div className="newslatter">
            <form>
              <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
              <input type="submit" name="submit" value="Lets Start" />
            </form>
          </div>
        </div>
      </div>

      {/* <!----About section start----> */}
      <section className="about" id="about">
        <div className="main">
          <img src={img} alt="Image of me" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>Developer <span>& Designer</span></h5>
            <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
            <a href="#home" style={{textDecoration:"none", color:'white'}}><button type="button">Let's Talk</button></a>
          </div>
        </div>
      </section>

      {/* <!-----service section start-----------> */}
      <div className="service" id="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>

        <div className="box">
          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

              <p style={{ textAlign: "center" }}>
                {/* <a className="button" href="/">Read More</a> */}
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-user"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

              <p style={{ textAlign: "center" }}>
                {/* <a className="button" href="/">Read More</a> */}
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-bell"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

              <p style={{ textAlign: "center" }}>
                {/* <a className="button" href="/">Read More</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!------Contact Me------> */}
      <div className="contact-me" id="contact-me">
        <p>Let Contact With Each Other.</p>
        {/* <a className="button-two" href="/">Hire Me</a> */}
      </div>

      {/* <!------footer start---------> */}
      <footer id="footer">
        <p>Zain Hanif</p>
        <p>For more HTML, CSS, and coding tutorial - please click on the a below to subscribe to my channel:</p>
        <div className="social">
          {/* <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-dribbble"></i></a> */}
        </div>
        <p className="end">CopyRight By @Zain Hanif</p>
      </footer>
    </>
  )
}

export default Index