import usePrevious from './hooks/UsePrevious.jsx';
import { useLocalStorage } from './hooks/UseLocalStorage';

import { State } from "./hooks/UseState";
import { Context } from "./hooks/UseContext";
import { Books } from "./components/Books";

export default function App() {
    const [count, setCount] = useLocalStorage(0, 'key2');
    const prevCount = usePrevious(count);
  return (
    <div className="App">
        <div>
            <button onClick={() => setCount(count + 1)}>Update</button>
            <h2>Current Count: {count}</h2>
            <h2>Previous Count: {prevCount}</h2>
        </div>

      <State />
      <Context>
         <Books />
      </Context>
    </div>
  );
}
