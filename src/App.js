import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import paduma from "./images/padumaM .png";
import project1 from "./images/devblog.png";
import project2 from "./images/ecom.png";

function App() {
  return (
    <div className="App">
      <Particles
        className="main-div container-fluid"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
      <div className="container welcome-div">
        <div className="row">
          <div className="col-md-12">
            <img className="my-img" src={paduma} alt="Card cap" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>
              Hello, I'm <span className="name-text">Paduma Madushanka</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>
              I'm a <span className="name-text-pink">full-stack developer</span>
            </h2>
          </div>
        </div>
        <div className="row about-row">
          <div className="col-md-12">
            <h2>
              <span className="name-text">about me</span>
              <img
                src="https://img.icons8.com/doodle/48/000000/boy.png"
                alt="Card cap"
              />
            </h2>
            <p className="para">
              i recently graduated at horizon campus malabe. I have
              serious passion for full stack development and creating intuitive,
              dynamic user experiences. i have been working with modern
              technology stacks while studying in the university. i would like
              to join with better place where i can learn more and build-up my
              future career while supporting to achieve company goals with my
              maximum.
            </p>
          </div>
        </div>
        <div className="row card-div">
          <div className="col-md-6">
            <div className="card" style={{ width: "18rem;" }}>
              <img className="card-img-top" src={project1} alt="Cardcap" />
              <div className="card-body">
                <h5 className="card-title">developer community</h5>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ width: "18rem;" }}>
              <img className="card-img-top" src={project2} alt="Cardcap" />
              <div className="card-body">
                <h5 className="card-title">e-commerce Application</h5>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-header ">Developed by</div>
        <div className="card-body">
          <h5 className="card-title">Paduma Madushanka</h5>
          <a
            href="https://www.linkedin.com/in/paduma-madushanka-509187158/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
              alt="Card cap"
            />
          </a>
        </div>
        <div className="card-footer ">
          &copy; 2020 Paduma MAdushanka All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default App;
