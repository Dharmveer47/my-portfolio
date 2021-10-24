import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { AiFillCloseSquare } from "react-icons/ai";
import "../Style/Home.css";
const Home = () => {
  
  const [fromdnone, setFromdnone] = useState("inputfild2");
  const formShow = () => {
    if (fromdnone === "inputfild2") {
      setFromdnone("");
    } else {
      setFromdnone("inputfild2");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_75fzm2q",
        e.target,
        "user_Slocq860PynXZ3iLip4zC"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Sucessfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="HomeStyle"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
      >
        <div className="social ">
          <div>
            <a
              href="https://github.com/Dharmveer47"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <BsGithub style={{ width: "25px", height: "25px" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/c_cpp_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsInstagram style={{ width: "25px", height: "25px" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/dharmveer-singh-54401020a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsLinkedin style={{ width: "25px", height: "25px" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/dharmveer47"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <BsFacebook style={{ width: "25px", height: "25px" }} />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/DharmuBurning"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsTwitter style={{ width: "25px", height: "25px" }} />
            </a>
          </div>
        </div>
        <div className="homeBody">
          <div className="mynameis">Hi, my name is </div>
          <div className="Dharmveer">Dharmveer Singh</div>
          <div className="Ibuild">I build things for the web.</div>
          <div className="LittlAbo">
            I'm{" "}
            <span className="mynameis fw-normal">
              {" "}
              UI/UX designer & Front-end Web Developer
            </span>{" "}
            . Drawn to the problem solving and creative aspects of UX design,
            Dharmveer is passionate about creating human-centric solutions to
            solve users’ problems and revealing new opportunities for them.
            Emmanual creates customer-focused designs that result in positive
            user experiences, empathizing with people to comprehend their needs
            fully.
          </div>
          <form className=" formfild mt-3 " onSubmit={sendEmail}>
            <div className={`inputfild ${fromdnone}`}>
              <div className="mt-3 crossLink2">
                <AiFillCloseSquare
                  onClick={formShow}
                  style={{ width: "25px", height: "25px" }}
                  className="crossLink"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input name="subject" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Your Messages</label>
                <textarea
                  name="message"
                  type="text"
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input name="email" type="email" className="form-control" />
                <div className="form-text">
                  I'll never share your email with anyone else.
                </div>
              </div>
            </div>
            <div className="getin">
              <input
                type="submit"
                className="btn btn-outline-info"
                onClick={formShow}
                value="Get In Touch"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
