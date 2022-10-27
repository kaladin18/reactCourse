import { useEffect, useState } from 'react'
import { getBookData } from './utils/bookData'
import './App.css'
import ItemDetailContainer from './components/main/ItemDetailContainer'
import NavBar from './components/navbar/NavBar'
import Home from './components/main/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
const greeting = 'Bienvenidxs a la Biblioteca'


function App() {
    const [allBooks, setAllBooks] = useState([])
  
    useEffect(() => {
      setTimeout(() => {
        const bookData = getBookData()
        setAllBooks(bookData)
      }, 250);
        
        
    }, [])
    

    
    return (
        <BrowserRouter className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home greeting={greeting} bookData={allBooks}/>} />
                <Route exact path="/category/:categoryId" element={<Home bookData={allBooks}/>} />
                <Route exact path="/item/:itemId" element={<ItemDetailContainer bookData={allBooks}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
