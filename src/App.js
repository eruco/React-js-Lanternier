import './App.css';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div>
      <h1 className="title">Menu</h1>
      <NavBar/>
      <br/>
      <button onClick={()=>alert("hola")}>Click me</button>
    </div>
  );
}

export default App;
