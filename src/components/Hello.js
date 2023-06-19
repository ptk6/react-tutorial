import React from "react";

const Hello = () => {
  //Using JSX
  //   return (
  //     <div>
  //       <h1>Hello PTK!!!</h1>
  //     </div>
  //   );
  //Without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello PTK!!!")
  );
};
export default Hello;
