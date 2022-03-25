import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Section from './Section';
import ExperienceTab from './ExperienceTab';
import AboutSection from './AboutSection';


const Title = () => {
  return (
    <div>
      <NavBar/>
      <div className="title container p-5 my-5">
        <h5>Hey 👋 everyone! I'm</h5>
        <h1>Kalyan Chavali</h1>
        <h3>Full Stack Software Engineer</h3>
        <p>I am a software engineer building high quality software<br/>
        in Java, JavaScript (React), Spring and other technologies.<br/>
        At present, I'm working in financial planning part of Workday!</p>
      </div>
      <Section>
        <h2>About me</h2>
        <AboutSection />
      </Section>
      <Section>
        <h2>Experience</h2>
        <ExperienceTab />
      </Section>
      <Section>
        <h2>Skills</h2>
      </Section>
      <Section>
        <h2>Education</h2>
      </Section>
    </div>
  );
};

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);

