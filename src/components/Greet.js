import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} you are a {props.heroname}
      </h1>
      {props.children}
    </div>
  );
};
// Destructuring props

// const Greet = ({ name, heroname, children }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} you are a {heroname}
//       </h1>
//       {children}
//     </div>
//   );
// };

// Destructuring props (another method)

// const Greet = (props) => {
//   const { name, heroname, children } = props;
//   return (
//     <div>
//       <h1>
//         Hello {name} you are a {heroname}
//       </h1>
//       {children}
//     </div>
//   );
// };

export default Greet;
