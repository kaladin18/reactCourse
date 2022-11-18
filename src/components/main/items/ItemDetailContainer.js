import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, getFirestore, query, where, FieldPath } from 'firebase/firestore'
import ItemDetail from './ItemDetail';
import './styles/itemDetailContainer.css'
function ItemDetailContainer() {
    const { itemId } = useParams()
    const [book, setBook] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'books', itemId)
        getDoc(docRef).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("No results");
            }
            setBook({id: snapshot.id, ...snapshot.data()})
        })
        
    }, [itemId])
    return (
        <div className="detail-container">
          <ItemDetail book={book}/>
        </div>
    )
}

export default ItemDetailContainer