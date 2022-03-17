import React from 'react';

class Section extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

export default Section;