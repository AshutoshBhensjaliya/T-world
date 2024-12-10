import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h3 className="about-title">About Us</h3>
        <p className="about-description">
          Welcome to T-World, your ultimate gateway to the most exhilarating trekking adventures! At T-World, we believe that every trek is not just a journey through nature but a voyage into your inner self. Our mission is to connect you with awe-inspiring trails and breathtaking landscapes, offering curated treks that cater to both novice adventurers and seasoned hikers. Founded by a team of passionate trekkers and outdoor enthusiasts, T-World is dedicated to providing you with safe, memorable, and enriching trekking experiences. Whether you're seeking a peaceful escape into the wilderness or an adrenaline-pumping challenge, T-World has something for everyone. Join us and discover the world, one trail at a time!
        </p>
      </div>
      <div className="about-image-container">
        <img className="about-image" src="images/about-img.png" alt="About T-World" />
      </div>
    </div>
  );
}

export default About