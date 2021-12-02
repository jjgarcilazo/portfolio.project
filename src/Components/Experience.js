import React from 'react'
import '../css/Experience.css'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2021-Present</h3>
            <p>Remote Freelance Web Developer
               &emsp;&ensp;               
               Worldwide             


            </p>
            <ul>
              <li>
                Advertised via Fiver App to Contract work
              </li>
              <li>
                Contributed to various open source projects and participated in
                website Hackathons
              </li>
              <li>
                Built 20+ single page websites and full stack applications
              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2021</h3>
            <p>
               FT Full Stack Engineering Program with Mobile development 
               &emsp;&ensp;               
               &emsp;&ensp;
               &emsp;&ensp;
               &emsp;&ensp;
               Nucamp Coding Bootcamp
               &emsp;&ensp;Los Angeles, CA
            </p>
            <ul>
              <li>
                  HTML , CSS , JavaScript
              </li>
              <li>
                 Front-End Web UI Framework, Bootstrap
              </li>
              <li>
                Front End JavaScript Library, React
              </li>
              <li>
                Multi-platform Mobile App Development with React Native
                </li>
                <li>
                  Server-side Development with NodeJS, Express and MongoDB

              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2020-2021</h3>
            <p>Code Academy&emsp;&ensp;Web Development  &emsp;&ensp;Los Angeles, CA</p>
            <ul>
              <li>
              -Successfully completed intensive 12 week full immersion bootcamp representing more than 660 hours of training.
               </li>
               <li>
                 -Built, modified and maintained numerous scalable applications/websites from inception to completion with the guidance and instruction from senior developers.
              </li>
              <li>
              -Trained in a project oriented environment modeled after real-world workplace focused on collaborative development utilizing common languages, frameworks, and libraries including HTML5, CSS3, JavaScript, Bootstrap, PHP, SQL and MySQL.

              </li>
              <li>
              -Extensively utilized Github for version control in an agile development environment.

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience