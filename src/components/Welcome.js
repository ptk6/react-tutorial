import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroname}
        <br />
        {this.props.children}
      </h1>
    );
  }
}

// Destructuring Props
// const {state1, state2}= this.state;

// class Welcome extends Component {
//   render() {
//     const { name, heroname, children } = this.props;
//     return (
//       <h1>
//         Welcome {name} a.k.a {heroname}
//         <br />
//         {children}
//       </h1>
//     );
//   }
// }

export default Welcome;
