import './styles/item.css'
import { NavLink } from 'react-router-dom'
function Item({ book }) {
    return (
        <NavLink to={`/item/${book.id}`}>
            <article className="item">
                <img src={book.image} alt={book.name} className='product-image'/>
                <div>
                    <h4 className='productname'>{book.name}</h4>
                    <p className='product-price'>{book.price}</p>
                </div>
            </article>
        </NavLink>
    )
}

export default Item
