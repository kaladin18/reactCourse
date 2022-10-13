import './styles/itemlistcontainer.css'
function ItemListContainer({greeting}) {
    return (
        <div className='main-container'>
            <h1 className='greeting'>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;