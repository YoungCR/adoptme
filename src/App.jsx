import './App.css';
import Pet from './components/Pet';

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Jax" animal="dog" breed="Border Collie Papillon" />
      <Pet name="Poe" animal="cat" breed="Cockatiel" />
      <Pet name="Ivy" animal="cat" breed="Mix" />
    </div>
  );
}

export default App;
