import './styles/addItemButton.css'

function AddItemButton({ book }) {
    return (
        <div className='addItemButton'>
        <button className='addToCart'>Añadir al carrito</button>
        <button className='buyButton'>Comprar</button>
        </div>
    )
}

export default AddItemButton
