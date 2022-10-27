import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { findBookByField } from '../../utils/bookData'
import Item from './Item';
import './styles/itemDetailContainer.css'
function ItemDetailContainer({ bookData }) {
    const { itemId } = useParams()
    const [book, setBook] = useState([])
    useEffect(() => {
        const book = findBookByField(bookData, 'id', itemId)
        setBook(book)
    }, [])
    return (
        <div className="detail-container">
          <Item book={book}/>
        </div>
    )
}

export default ItemDetailContainer