import React from "react";

const Welcome = () => (
  <div>
    <h1>Welcome {this.props.name}</h1>
    {this.props.children}
  </div>
);
export default Welcome;
