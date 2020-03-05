import React from 'react';
import IsraelHarvin from './images/israel.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


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
      
      <div>
        <Card.Img variant="top" src="https://lh3.googleusercontent.com/cm3Aj0hNkVbYmDsRfVecHjtN7C4mga1hj1URYSiJYzynD8vYmShDTh2qYg5KLBptNCg" alt="Hangman" />
        <Card.Body>
          <Card.Title className="hangman">Hangman</Card.Title>
          <Card.Text>
          This project is a hangman game where you guess the letters of the word and if you get it right you win or if you run out of 10 tries you lose. The languages I used for this project are HTML5, CSS3, and JavaScript.
          </Card.Text>
          <Button variant="primary" href="https://izzyharvin.github.io/HangmanGame/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/HangmanGame">Github Link</Button>
        </Card.Body>
      </div>

      <div>
        <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/925919427373820977/ED84CAA2CC60E54921D6B433E7042532EE34B6C4/" alt="GifTastic" />
        <Card.Body>
          <Card.Title>GifTastic</Card.Title>
          <Card.Text>
          This project is a Giphy application where you can choose or create a button and it will show you different GIphy of that Actor. The languages I used for this project are HTML5, CSS3, JavaScript , and JQuery.
          </Card.Text>
          <Button variant="primary" href="https://izzyharvin.github.io/GifTastic/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/GifTastic">Github Link</Button>
        </Card.Body>
      </div>

      <div>
        <Card.Img variant="top" src="https://image.freepik.com/free-vector/rock-paper-scissors-hand-sign-game_9638-59.jpg" alt="Rock, Paper, Scissor Game" />
        <Card.Body>
          <Card.Title>Paper, Rock, Scissor Game</Card.Title>
          <Card.Text>
          This app is the basic paper, rock, scissor game using HTML, CSS, and Javascript.
          </Card.Text>
          <Button variant="primary" href="https://izzyharvin.github.io/Paper-Rock-Scissor/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/Paper-Rock-Sissor">Github Link</Button>
        </Card.Body>
      </div>

      <div>
        <Card.Img variant="top" src="./images/petconnect.jpg" alt="Pet Connect" />
        <Card.Body>
          <Card.Title>Pet Connect</Card.Title>
          <Card.Text>
          In this project you can make a Log In for yourself and after you do that, then you will choose what you want a dog or cat. After you choose then you will do a short survey so that you can find that perfect match between the dog or cat you need. The languages I used where HTML5, CSS3, and JavaScript.
          </Card.Text>
          <Button variant="primary" href="https://awesomeproject2.herokuapp.com/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/Pet-Finder">Github Link</Button>
        </Card.Body>
      </div>

      <div>
        <Card.Img variant="top" src="./images/rpggame.jpg" alt="Unknown Heroes" />
        <Card.Body>
          <Card.Title>Unknown Heroes</Card.Title>
          <Card.Text>
          This project is a game where you can make your log in account then choose a character use and a enemy to go against. Once you win or lose, the account you use will save you experience points and level ups. The languages I used are HTML5, CSS3, React.js, and MongoDB to save the data of the created log in and the exprience/level up of the characters they use.
          </Card.Text>
          <Button variant="primary" href="https://unknownheroes.herokuapp.com/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/unknown-heroes">Github Link</Button>
        </Card.Body>
      </div>

      <div>
        <Card.Img variant="top" src="./images/spider-man.jpg" alt="Marvel Search"/>
          <Card.Body>
          <Card.Title>Marvel Search</Card.Title>
          <Card.Text>
          This project is a Marvel Search app where it shows you a list of Marvel Characters and it will show a description with a name and picture of the character. There is alsoi a link button you can click on to go to marvel website to look up comic books or biography of the character you choose. The languages I used are HTML5, CSS3, and React.js.
          </Card.Text>
          <Button variant="primary" href="https://marvel-searchapp.herokuapp.com/">Project Link</Button>
          <Button variant="primary" href="https://github.com/Izzyharvin/MarvelSearch">Github Link</Button>
        </Card.Body>
      </div>
      

      <div className="footer">
        <h6 className="copyright">Copyright</h6>
      </div>
    </div>
  );
}

export default App;
