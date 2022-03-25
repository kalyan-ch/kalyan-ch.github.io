import React from 'react';

class Section extends React.Component{
  render(){
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
};

export default Section;