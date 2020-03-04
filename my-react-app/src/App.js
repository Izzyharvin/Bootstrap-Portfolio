import React from 'react';
import IsraelHarvin from './images/israel.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="home">Israel Harvin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link eventKey={2} href="portfolio">
            Portfolio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="jumbotron">
      <h1>The New Beginning to Programming.</h1>
      <img src={IsraelHarvin} className="IsraelHarvin" alt="Israel Harvin" width="200" height="200"></img>
      <p> Creatively-driven Front-End Web Developer focused on 
          building attractive and functional webpages. Educated at The Art 
          Institute of Charlotte for Graphic Design and still 
          attending Central Piedmont Community College for an 
          Associate in Simulation and Gaming Development. 
          Graduated at The University of North Carolina at 
          Charlotte Continuing Education Full Stack Flex Program 
          with skills in Visual Studio Code, React, 
          Maya, CSS, HTML, Javascript, Adobe Illustrator, and 
          Adobe Photoshop. My passion for creativity and 
          technology brought me to the front-end. As a front-end 
          developer, I take empty blank screen of nothing and 
          turn it into a creative masterpiece by telling the 
          computer what to do. Strengths in art design, 
          creativity, a mind for learning, and completing 
          projects with initiative. I want to be in a position 
          to build a website with my creativity using technology.
      </p>

      <Table responsive>
        <thead>
          <tr>
            <th><strong>Soft Skills:</strong></th>
            <th><strong>Technical Skills:</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leadership</td>
            <td>React.js</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Communication</td>
            <td>CSS3</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Problem Solving</td>
            <td>JavaScript</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Teamwork</td>
            <td>Adobe Illustrator</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Creativity</td>
            <td>API's</td>
          </tr>
        </tbody>
      </Table>

      <div>
      <p><strong>Email: izzy84.ih@gmail.com</strong></p>
      </div>
      
      <p>
        <Button variant="primary" className="github-button" href="https://github.com/Izzyharvin">GitHub page</Button>
        <Button variant="primary" className="linkedin-button" href="https://www.linkedin.com/in/israel-harvin-7527a6138/">LinkedIn page</Button>
      </p>
      </Jumbotron>

      <div className="footer">
        <h6 className="copyright">Copyright</h6>
      </div>
    </div>
  );
}

export default App;
