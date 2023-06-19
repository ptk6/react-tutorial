import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Greet name="Prateek" heroname="KING">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bansita" heroname="QUEEN">
        <button>Love More</button>
      </Greet>
      <Greet name="Raghav" heroname="SERVENT" />
      <Welcome name="Bansita" heroname="QUEEN">
        <button>Love</button>
      </Welcome>
      <Hello />
    </div>
  );
}

export default App;
