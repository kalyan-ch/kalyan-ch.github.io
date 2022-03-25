import React from 'react';

class AboutSection extends React.Component{
  render(){
    return (
      <div className='about-section container p-5 my-5'>
        <div className='row'>
          <div className='col'>
            <p>Kalyan is a Software Developer with over 7 years of experience in building high-quality software in many different programming languages and technologies.
            At present, he works as a Software Development Engineer at Workday, developing software in Java, Python, and various other technologies.</p>
          </div>
          <div className='col'>
            <img src="my_pic.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;