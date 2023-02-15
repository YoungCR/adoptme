import { createRoot } from "react-dom";
import Pet from "./Pet"

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Jax" animal="dog" breed="Border Collie" />
    <Pet name="Poe" animal="cat" breed="Black short hair" />
    <Pet name="Ivy" animal="cat" breed="Tortoise short hair" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
