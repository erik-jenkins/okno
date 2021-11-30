import useOknoManager from "hooks/useOknoManager";
import "./App.css";

function App() {
  const { getAll, add } = useOknoManager();
  return (
    <div className="App">
      <button onClick={add}>Add window</button>
      <div>
        {getAll().map((okno) => (
          <div key={okno.id}>
            <strong>ID:</strong> {okno.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
