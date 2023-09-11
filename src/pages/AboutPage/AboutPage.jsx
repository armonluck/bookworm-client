import React from 'react';
import './AboutPage.scss'

function AboutPage() {
  return (
    <section className='about'>
      <div>
        <h2>Meet The Team</h2>
        <p>Armon Luckenbach</p>
        <p>Lead Developer</p>
        <p>
          The humble developer of the app before you. I am a lifelong reader and book lover who loves to slip into the thrill of a new fantasy world or the emotional rollercoaster of a romance novel. Some of my favorites reads include The Wheel of Time Series, The Way of Kings, and The Book Thief.
        </p>
        <div class="social-media">
            <a class="social-media__link" href="https://www.instagram.com/">
                <img class="social-media__svg" src="" alt="Instagram logo" />
            </a>
            <a class="social-media__link" href="https://www.facebook.com/">
                <img class="social-media__svg" src="" alt="Facebook logo" />
            </a>
            <a class="social-media__link" href="https://twitter.com/">
                <img class="social-media__svg" src="" alt="Twitter logo" />
            </a>
        </div>
      </div>
      <div>
        <h2>What is Bookworm?</h2>
        <p>
          Reading doesn't have to be a solo endeavor. Popular apps in the reading community have failed to bring a social connection between readers. Although comments, reviews, and occasional discussions under individual book titles are possible the user cannot have a private discussion/chat in app and have to navigate to another platform to properly express themselves. This is where <span>bookworm</span> steps in to bridge that gap
        </p>
      </div>
      
      <div>

      </div>
    </section>
  )
}

export default AboutPage;
