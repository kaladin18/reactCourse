import './styles/item.css'
import { NavLink } from 'react-router-dom'
function Item({ book }) {
    return (
        <NavLink to={`/item/${book.id}`}>
            <article className="item">
                <img src={book.image} alt={book.title} className='product-image'/>
                <div>
                    <h4 className='productname'>{book.title}</h4>
                </div>
            </article>
        </NavLink>
    )
}

export default Item
