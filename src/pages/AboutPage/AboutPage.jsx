import React from 'react';
import images from '../../components/Images/Images';
import './AboutPage.scss'

function AboutPage() {
  return (
    <section className='about'>
      <div className='about-who'>
        <h2 className='about__header'>Meet The Team</h2>
        <p className='about__subheader'>Armon Luckenbach</p>
        <p className='about__subheader--title'>Lead Developer</p>
        <p className='about__text'>
          The humble developer of the app before you. I am a lifelong reader and book lover who loves to slip into the thrill of a new fantasy world or the emotional rollercoaster of a romance novel. Some of my favorites reads include The Wheel of Time Series, The Way of Kings, and The Book Thief.
        </p>
        <a className="about__link" href="https://github.com/armonluck">
          <img className="about__link--github" src={images.GithubPNG} alt="Github logo" />
        </a>
      </div>
      <div className='about-what'>
        <h2 className='about__header'>What is Bookworm?</h2>
        <p className='about__text'>
          Reading doesn't have to be a solo endeavor. Popular apps in the reading community have failed to bring a social connection between readers. Although comments, reviews, and occasional discussions under individual book titles are possible the user cannot have a private discussion/chat in app and have to navigate to another platform to properly express themselves. This is where <span>bookworm</span> steps in to bridge that gap.
        </p>
      </div>
    </section>
  )
}

export default AboutPage;
