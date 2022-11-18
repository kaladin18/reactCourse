import './styles/item.css'
import { NavLink } from 'react-router-dom'
function ItemDetail({ book }) {
    return (
        <NavLink to={`/item/${book.id}`}>
            <article className="item">
                <img src={book.image} alt={book.title} className='product-image'/>
                <div>
                    <h4 className='productname'>{book.title}</h4>
                    <div className='productDescription'>
                        <p>{book.description}</p>
                    </div>
                    <p className='product-price'>{book.price}</p>
                </div>
            </article>
        </NavLink>
    )
}

export default ItemDetail
