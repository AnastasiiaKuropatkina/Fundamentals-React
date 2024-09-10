import { State } from "./hooks/State";
import { Context } from "./hooks/Context";
import { Books } from "./components/Books";
function App() {
  return (
    <div className="App">
      {/*<State />*/}
      <Context>
        <Books />
      </Context>
    </div>
  );
}

export default App;
