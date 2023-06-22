import React from "react";

function functionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return <button onClick={clickHandler}>Click</button>;
}

export default functionClick;
