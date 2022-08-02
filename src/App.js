import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  
  const dataProducts = [
    {
      name: 'Televisor 52"',
      price: 2090,
      imgurl: "https://picsum.photos/280/260",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,   quidem.",
    },
    {
      name: 'Monitor 22"',
      price: 890,
      imgurl: "https://picsum.photos/280/260",
      description: "Lorem ipsum dolor sit,  quidem.",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <br />
      <ItemListContainer greeting ='texto de prueba greeting'/>
      <Button text="Boton de ejemplo" />
      
      <div className="main">
        <Card data={dataProducts[0]} />
        <Card data={dataProducts[1]} />
      </div>

      <ItemCount initial={1} stock={10} />
      <ItemCount initial={5} stock={20} />
      <ItemCount initial={10} stock={30} />
    </div>
  );
}

export default App;