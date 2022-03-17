import React from 'react';

class TabBtn extends React.Component{
  render(){
      return (
        <button className="nav-link" id="v-pills-home-tab" 
          data-bs-toggle="pill" data-bs-target="#v-pills-home" 
          type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
            { this.props.text }
        </button>
      );
  }
}

export default TabBtn;