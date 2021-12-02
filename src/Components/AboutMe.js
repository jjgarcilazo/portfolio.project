import React from 'react'
import dez from '../assets/images/22.jpeg'
import '../css/AboutMe.css'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={dez} alt='Jesse Garcilazo' />
          </div>
        </div>
        <div className='col-lg-6 col-xs-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Hello, I am a Full Stack Web Developer seeking a new challenge in
            web development. I love to create and think outside the box when it
            comes to designing web sites. With a little over 1 years of experience in
            the IT industry, I have worked with a vast array of technologies
            including: React, Javascript, Mongo DB, Ruby on Rails, Python, Bootstrap and various other languages and applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe