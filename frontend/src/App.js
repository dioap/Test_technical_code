import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <form method="POST">
        <input type="text" placeholder="input angka" />
        <br />
        <button type="submit">Generate segitiga</button>
        <button type="submit">Generate Bilangan Ganjil</button>
        <button type="submit">Generate Bilangan Prima</button>
        <h1>Result:</h1>
      </form>
    </>
  );
}

export default App;
