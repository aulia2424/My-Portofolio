import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/netflix1.jpg";
import projImg2 from "../assets/img/projects/netflix2.jpg";
import projImg3 from "../assets/img/projects/cola.jpg";
import projImg4 from "../assets/img/projects/company portofolio.jpg";
import projImg5 from "../assets/img/projects/landing page.jpg";
import projImg6 from "../assets/img/projects/starbucks.jpg";
import projImg7 from "../assets/img/projects/ama bank.jpg";
import projImg8 from "../assets/img/projects/news app.jpg";
import projImg9 from "../assets/img/projects/pizza hut.jpg";
import projImg10 from "../assets/img/projects/wen article.jpg";
import projImg11 from "../assets/img/projects/web article light mode.jpg";
import projImg12 from "../assets/img/projects/perpustakaan.jpg";
import projImg13 from "../assets/img/projects/portofolio1.jpg";
import projImg14 from "../assets/img/projects/portofolio2.jpg";
import projImg15 from "../assets/img/projects/landing pag2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix Landing Page",
      description: "With Javascript",
      imgUrl: projImg1,
    },
    {
      title: "Netflix Landing Page",
      description: "With Javascript",
      imgUrl: projImg2,
    },
    {
      title: "ColaCola Landing Page",
      description: "With Javascript",
      imgUrl: projImg3,
    },
    {
      title: "Web Company Portofolio",
      description: "With React JS",
      imgUrl: projImg4,
    },
    {
      title: "My Landing Page",
      description: "With React JS",
      imgUrl: projImg5,
    },
    {
      title: "Starbucks Landing Page",
      description: "With Javascript",
      imgUrl: projImg6,
    },
    {
      title: "AMA Bank",
      description: "With React JS",
      imgUrl: projImg7,
    },
    {
      title: "News Web",
      description: "With React JS",
      imgUrl: projImg8,
    },
    {
      title: "Pizza Hut Landing Page",
      description: "With PHP",
      imgUrl: projImg9,
    },
    {
      title: "Web Article Dark Mode",
      description: "With PHP",
      imgUrl: projImg10,
    },
    {
      title: "Web Article Light Mode",
      description: "With PHP",
      imgUrl: projImg11,
    },
    {
      title: "Bookshelf",
      description: "With React JS",
      imgUrl: projImg12,
    },
    {
      title: "My Portofolio Dark Mode",
      description: "With React JS",
      imgUrl: projImg13,
    },
    {
      title: "My Portofolio Light Mode",
      description: "With React JS",
      imgUrl: projImg14,
    },
    {
      title: "Company Website",
      description: "With React JS",
      imgUrl: projImg15,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects that I have developed using several programming languages and frameworks.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This project is my portfolio, which contains several projects that I have created whether using the framework or not, and I prefer to create an attractive, interactive and dynamic website appearance.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
