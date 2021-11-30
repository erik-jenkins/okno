import DefaultOknoWindow from "components/DefaultOknoWindow";
import useOknoManager from "hooks/useOknoManager";
import "./App.css";

function App() {
  const { getAll, add } = useOknoManager();
  return (
    <div className="App">
      <button onClick={add}>Add window</button>
      <div>
        {getAll().map((okno) => (
          <DefaultOknoWindow key={okno.id} okno={okno}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            facere, consequuntur tenetur dolorum eum laborum tempore doloribus
            perferendis dolorem quidem iste amet optio hic ut, quos maiores
            porro repellat doloremque.
          </DefaultOknoWindow>
        ))}
      </div>
    </div>
  );
}

export default App;
