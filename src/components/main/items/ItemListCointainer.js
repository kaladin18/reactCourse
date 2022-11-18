import Item from './Item'
import './styles/itemlistcontainer.css'
function ItemListContainer({ greeting, bookData }) {
    return (
        <div className="main-container">
            <h1 className="greeting">{greeting}</h1>
            <div className='item-container'>
                {bookData.map((book, i) => {
                    return <Item key={i} book={book} />
                })}
            </div>
        </div>
    )
}

export default ItemListContainer
