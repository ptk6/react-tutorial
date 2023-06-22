import React, { Component } from "react";

class ClassClick extends Component {
  clickEvent() {
    console.log("clicked this button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
