import ItemListContainer from './items/ItemListCointainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore'

function Home({greeting}) {
    const [books, setBooks] = useState([])
    
    
    const { categoryId } = useParams()
    useEffect(() => {
        const db = getFirestore();
        const booksCollection = collection(db, 'books')
        getDocs(booksCollection).then((snapshot) => {
        let books = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setBooks(books)
         
        })
        
      },[])
    useEffect(() => {
        if(!categoryId){
        }else {
        const db = getFirestore();
        const q = query(collection(db, 'books'), where('category', 'array-contains', categoryId))
        getDocs(q).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("No results");
            }
            
            setBooks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
        })
        }
       
    }, [categoryId])


    return (
        <div className='main-home'>
           <ItemListContainer greeting={greeting} bookData = {books}/>
        </div>
    );
}

export default Home;