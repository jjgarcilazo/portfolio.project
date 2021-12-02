import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faGithub, faReact, faSketch, faJira, faBootstrap, faApple, faPython } from '@fortawesome/free-brands-svg-icons'
import '../css/Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <h1 className='py-5'>My skills</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faNodeJs} size='2x' />
              </div>
              <h3>Javascript</h3>
              <p>
                A high-level, just-in-time compiled & multi-paradigm language.
                Alongside HTML and CSS, it is one of the core technologies of
                the World Wide Web.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faApple} size='2x' />
              </div>
              <h3>Mac OSX</h3>
              <p>
                3+ years of experience in support and troubleshooting  Mac OS platforms (Max OSX 10.10+) 
                including mobile devices running Apple iOS 
                    
              </p>
            </div>
          </div>
          
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faPython} size='2x' />
              </div>
              <h3>Python</h3>
              <p>
             Python is a computer programming language often used to build websites and software,
             automate tasks, and conduct data analysis.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faReact} size='2x' />
              </div>
              <h3>React</h3>
              <p>
              React is an open-source JavaScript 
                    library that is used for building user interfaces 
                    specifically for single-page applications. 
                    It's used for handling the view layer for web and mobile apps.
              </p>
            </div>
          </div>{/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faJira} size='2x' />
              </div>
              <h3>Jira</h3>
              <p>
              Jira is a software application used for issue tracking and project management.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faBootstrap} size='2x' />
              </div>
              <h3>Bootstrap</h3>
              <p>
              Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages
               (as opposed to web apps). 
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
              </div>
              <h3>GitHub</h3>
              <p>
              GitHub is a code hosting platform for version control and collaboration.
               It lets you and others work together on projects from anywhere. 
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faSketch} size='2x' />
              </div>
              <h3>Sketch</h3>
              <p>
                Image result for sketch app
                Sketch is used primarily for designing the UI and UX of mobile apps and web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills