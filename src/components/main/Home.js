import ItemListContainer from './ItemListCointainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filterBooks } from '../../utils/bookData';

function Home({greeting, bookData}) {
    const [books, setBooks] = useState([])
    
    
    const { categoryId } = useParams()
    useEffect(() => {
        if(!categoryId){
            console.log("ENtra acacaaa", new Date());
            setBooks(bookData)
        }else {
            console.log("tambien aca?");
            const filteredBooks = filterBooks(bookData, categoryId) 
            setBooks(filteredBooks)
        }
       
    }, [categoryId, bookData])


    return (
        <div className='main-home'>
           <ItemListContainer greeting={greeting} bookData = {books}/>
        </div>
    );
}

export default Home;