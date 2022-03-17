import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Section from './Section';
import ExperienceTab from './ExperienceTab';

const Title = () => {
  return (
    <div>
      <NavBar/>
      <div className="title container-fluid p-5 my-5">
        <span>Hello! My name is</span>
        <h1>Kalyan Chavali</h1>
        <h3>Full Stack Software Engineer</h3>
        <p>I am a software engineer building high quality software<br/>
        in Java, JavaScript (React), Spring and other technologies.<br/>
        At present, I'm working in financial planning part of Workday!</p>
      </div>
      <Section>
        <h1>Experience</h1>
        <ExperienceTab />
      </Section>
      <Section>
        <h1>Skills</h1>
      </Section>
      <Section>
        <h1>Education</h1>
      </Section>
    </div>
  );
};

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);

