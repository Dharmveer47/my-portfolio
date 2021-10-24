import React, { useState } from "react";
import "../Style/Contect.css";
import { AiFillCloseSquare } from "react-icons/ai";
import emailjs from "emailjs-com";
const Contect = () => {
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
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      // data-aos-delay="300"
    >
      <div className="aboutme">
        <h1>Contect Me</h1>
      </div>
      <div className="contectMe text-center">
        <div className="">
          <p className="mynameis">What's Next ?</p>
          <h1 className="fw-bold">Get in touch</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rem itaque suscipit labore minima deserunt, voluptates, quae beatae
            rerum necessitatibus vero aliquam enim sequi et distinctio harum
            officiis. Eius, voluptatibus?
          </p>
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
  );
};

export default Contect;
