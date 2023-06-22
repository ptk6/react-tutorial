import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Greet name="Prateek" heroname="KING">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bansita" heroname="QUEEN">
        <button>Love More</button>
      </Greet>
      <Greet name="Raghav" heroname="SERVENT" /> */}
      {/* <Welcome name="Bansita" heroname="QUEEN">
        <button>Love</button>
      </Welcome> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
