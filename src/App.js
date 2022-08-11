import './App.css';
import NavBar from './components/NavBar';
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer';**/
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main__container">
        <h1>App en React</h1>
      </div>
      {/*<ItemListContainer title={'Cartas Pokemon'} />*/}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;