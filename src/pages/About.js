import React from 'react';
import '../Style/About.css';
import HeroImg from '../ImgIco/heroImg.jpg';
const About = () => {
    return (
        <div className="Aboutme"
                data-aos="fade-up"
                data-aos-duration="300"
                // data-aos-delay="300"
        >
            <div className="aboutme "><h1>About Me</h1></div>
            <div className="heroSec">

                <div className="heroImg"><img src={HeroImg} alt="HeroImg" /></div>
                <div className="LittleGraph">
                    <div className="LittleGraph2">
                        <div>
                            <p>
                                Hello, My name is Dharmveer Singh and I enjoy creating things that
                                live on the internet. <span className="highlite">My interest in web development </span> starte back in
                                2019 when I decided to try editing custom Tumblr thems - turns
                                out hacking together a custom reblog button taught me a lot
                                about HTML & CSS!<br />
                                <span className="highlite">
                                <span className="fw-bold"> “</span> Responsive Web Design always plays an important role whenever going to promote your website.<span className="fw-bold"> “</span><br/> - Josh Wilson
                                </span>
                            </p>

                        </div>
                        <div>Here are few technologies I’ve been working with recently</div>
                        <div className="d-flex toolsAndTech">
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>Node.js</li>
                                <li>C/C++ & Python</li>
                                <li>HTML5</li>
                            </ul>
                            <ul>
                                <li>React Js</li>
                                <li>Figma</li>
                                <li>Git & Github</li>
                                <li>Css & Sass </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
