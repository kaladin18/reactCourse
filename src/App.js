import './App.css';
import ItemListContainer from './components/main/ItemListCointainer';
import NavBar from './components/navbar/NavBar';
const greeting = "Bienvenidxs a la Biblioteca"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting  = {greeting}/>
    </div>
  );
}

export default App;
