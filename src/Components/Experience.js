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
            <h3>2021</h3>
            <p>Freelance Web Developer</p>
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
               &emsp;&ensp;Los Angeles,CA
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
            <h3>2008 - 2015</h3>
            <p>Systems Administrator&emsp;&ensp;PPAI&emsp;&ensp;Irving, Tx</p>
            <ul>
              <li>
                In charge of configuration management for workstations and
                mobile devices. Managed all software and hardware licensing.
                Implemented a virtualized testing environment.
              </li>
              <li>
                Maintained server/network infrastructure. Responsibilities
                included system installations and updates, audits, and server
                backups.
              </li>
              <li>
                Analyzed ways to identify and implement network improvements by
                creating monitors in order to minimize incidents. Scripted tasks
                such as machine deployments and upgrades through the use of
                imaging tools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience