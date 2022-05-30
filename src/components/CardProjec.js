import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

const CardProjec = (props) => {
  return (
    <>
      <div className="proCont" data-aos="fade-up" data-aos-duration="300">
        <div
          className="proImg heroImg"
          style={{ order: `${props.ProInfo.order}` }}
          data-aos="fade-down"
          data-aos-duration="300"
        >
          <img src={props.ProInfo.img} alt="TheMoviesDb" />
        </div>
        <div
          className="proText"
          style={{ textAlign: `${props.ProInfo.left}` }}
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <div className="proHeading">
            <p className="mynameis">Fetured Project</p>
            <h1>{props.ProInfo.Name} </h1>
          </div>
          <div className="proParagraph">
            <p>{props.ProInfo.Info}</p>
          </div>
          <div className="proSkills">
            <ul>
              <li>{props.ProInfo.skill[0]}</li>
              <li>{props.ProInfo.skill[1]}</li>
              <li>{props.ProInfo.skill[2]}</li>
              <li>{props.ProInfo.skill[3]}</li>
            </ul>
          </div>
          <div className="proLinks">
            <div>
              <a
                href={props.ProInfo.gitLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <BsGithub
                  style={{ width: "25px", height: "25px", margin: "5px" }}
                />{" "}
              </a>
            </div>
            <div>
              <a
                href={props.ProInfo.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <BiLinkExternal
                  style={{ width: "25px", height: "25px", margin: "5px" }}
                />{" "}
              </a>
            </div>
            <div>
              <a
                href={props.ProInfo.figma}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <FiFigma
                  style={{ width: "25px", height: "25px", margin: "5px" }}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProjec;
