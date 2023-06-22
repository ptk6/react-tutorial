import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    //   3rd Method(official and mostly used): binding from constructor
    this.ChangeMessage = this.ChangeMessage.bind(this);
  }

  ChangeMessage() {
    this.setState({
      message: "How are you?",
    });
  }

  //   4th Method: define the trigged function as an arrow function
  //   ChangeMessage = () => {
  //     this.setState({
  //       message: "How are you?",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ChangeMessage}>Click</button>
        {/* 1st Method: Using bind() */}
        {/* <button onClick={this.ChangeMessage.bind(this)}>Click</button> */}

        {/* 2nd Method: Using the arrow function */}
        {/* <button onClick={() => this.ChangeMessage()}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
