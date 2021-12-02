import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'
import '../css/Header.css'


const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>
        <h1>Jesse Garcilazo</h1>
        <h1>Full Stack Web Developer</h1>
        <Typed
          className='typed-text'
          strings={[
            'React',
            'React Native',
            'Javascript',
            'Mongo DB',
            'Ruby on Rails',
            'Ruby',
            'HTML',
            'Css',
            'C#',
            'Redux'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to='contact'
          offset={-110}
          className='btn-main-offer'
        >
          contact me
        </Link>
      </div>
    </div>
  )
}

export default Header