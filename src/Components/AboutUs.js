import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="mission-vision">
      <h1>Paw Finds🐾</h1>
        <h3>Our Mission</h3>
        <p>
          Our mission is to find loving homes for every pet and to help pet owners
          provide the best care possible for their furry friends. We believe every
          animal deserves a safe and loving environment.
        </p>
        <h3>Our Vision</h3>
        <p>
          Our vision is a world where every pet has a home and every home has a pet.
          We aim to be the leading platform for pet adoption and pet care education,
          connecting people with their perfect pets and providing resources to help
          them thrive together.
        </p>
      </section>

      <section className="about-us-tools">
        <h3>Use our tools</h3>
        <p>Learn how you can use all the tools from Adopt a Pet and our partners.</p>
        <div className="tool-cards">
          <div className="tool-card">
            <div className="tool-icon">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/23f0.gif"
                alt="Expert Answers Icon"
              />
            </div>
            <h3>Get 24/7 expert answers</h3>
            <p>
              On our sister app, The Kin. They have a team of licensed vets ready to answer all of your pet questions—big or small.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f43e.gif"
                alt="Set Up Alerts Icon"
              />
            </div>
            <h3>Set up alerts</h3>
            <p>
              Want help searching? Sign up for Free or Premium New Pet Alerts, and we’ll email you new matches.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">
              <img
                src="https://assets-v2.lottiefiles.com/a/c54d727e-1150-11ee-9541-c7f7ff06fd9f/oapVd24R4b.gif"
                alt="Rehome a Pet Icon"
              />
            </div>
            <h3>Rehome a pet</h3>
            <p>
              Need to find a new home for a pet? We’re here to help them find a new family, quickly and safely.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">
              <img
                src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif"
                alt="Pet Essentials Icon"
              />
            </div>
            <h3>Stock up on pet essentials</h3>
            <p>
              Need supplies (and lots of new toys) to welcome your future pet home? Our friends at PetSmart have everything you need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
