
import { getBookData } from './utils/bookData'
import './App.css'
import ItemDetailContainer from './components/main/items/ItemDetailContainer'
import NavBar from './components/navbar/NavBar'
import Home from './components/main/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const greeting = 'Bienvenidxs a la Biblioteca'


function App() {
    
    
    return (
        <BrowserRouter className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home greeting={greeting}/>} />
                <Route exact path="/category/:categoryId" element={<Home />} />
                <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
