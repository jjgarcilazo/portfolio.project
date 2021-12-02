// FIXME: uupdate picture links
import React from 'react'
import p72 from '../assets/images/p72.png'
import '../css/Portfolio.css'
// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

// FIXME: update portfolio projects
const Portfolio = () => {
 
      

  // Mintbean Hackathon Project
  const openPopupboxp72 = () => {
    const content = (
      <>
        <img
          className='p72'
          src={p72}
          alt='Project 72'
        />
        <p>
          Alien vs. Editor Mintbean Hackaton Project built using React with
          basic CRUD and authentication elements.
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://our-mintbean-team.github.io/texteditor-mintbean/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/our-mintbean-team')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Text Editor | Mintbean Hackathon project'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxp72}
          >
            <img
              src={p72}
              alt='Sportsfan Cafe Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
         
          {/* - */}
          
          {/* - */}
          
            
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio