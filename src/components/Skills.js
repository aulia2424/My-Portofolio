import meter1 from "../assets/img/php.png";
import meter2 from "../assets/img/javascript.png";
import meter3 from "../assets/img/sql.jpg";
import meter4 from "../assets/img/Typescrip.png";
import meter5 from "../assets/img/bootstrap.png";
import meter6 from "../assets/img/nextjs.png";
import meter7 from "../assets/img/laravel.png";
import meter8 from "../assets/img/tailwind.webp";
import meter9 from "../assets/img/postgresql.png";
import meter10 from "../assets/img/androidstudio.png";
import meter11 from "../assets/img/figma.png";
import meter12 from "../assets/img/node.js.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import "../App.css";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are the programming languages, tolls, frameworks and libraries that I am good at.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Hypertext Preprocessor</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Standard Query Language</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Next Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
