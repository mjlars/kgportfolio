import ProfilePic from './profilePic.jpg';
import './App.css';
import {ReactComponent as ReactLogo} from './KG.svg';
import './Style.scss';


function App() {
  return (
    <div className="App">

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-11"></div>
        <div class="particle particle-21"></div>
        <div class="particle particle-31"></div>
        <div class="particle particle-41"></div>
      </div>

      <header className="header">

        <nav>
          <p>
            Matt Larson
          </p>
          <div className='a-tag-wrapper'>
          <a href='#Home'>Home</a>
          <a href='#About'>About</a>
          <a href='#Projects'>Projects</a>
          <a href='#Contact'>Contact</a>
          </div>
        </nav>
        
      </header>

      <div id='Home'>
        <div className='logoContainer'>
          <ReactLogo/>
        </div>

        <nav>
          <a href='#About'>About Me</a>
        </nav>

        <div id='down-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div id="About">
        
            <div className="bio-skills">
                <div className="biography">
                    <img src={ProfilePic} alt="My Photo" />
                    <p>I have done web development bootcamps through the University of Utah and Lambda School.  
                    <br />
                    Im passionate about website design and functionality and I'm always looking for ways to improve my designs.  
                    <br />
                    I have also done graphic design for 7 years and plan on continuing to do so alongside my development projects.
                    <br />
                    Feel free to contact me if you have any questions.
                    </p>
                </div>
                <div class="skills-list">
                <h2>
                    My Skills
                </h2>
                <div class="skills-boxes">
                <div class="box"><p>HTML</p></div>
                    <div class="box"><p>CSS</p></div>
                    <div class="box"><p>JAVASCRIPT</p></div>
                    <div class="box"><p>REACT</p></div>
                    <div class="box"><p>REDUX</p></div>
                    <div class="box"><p>BOOTSTRAP</p></div>
                    <div class="box"><p>SASS</p></div>
                    <div class="box"><p>PHOTOSHOP</p></div>
                    <div class="box"><p>ILLUSTRATOR</p></div>
                    <div class="box"><p>INDESIGN</p></div>
                    <div class="box"><p>STYLED-COMPONENTS</p></div>
                    <div class="box"><p>Express</p></div>
                    <div class="box"><p>Node.js</p></div>
                    <div class="box"><p>MongoDB</p></div>
                </div>
                </div>
            </div>
        </div>

        
    </div>
  );
}

export default App;
