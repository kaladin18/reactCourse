import './styles/itemQuantitySelector.css'
import { useState, useCallback } from 'react'


function ItemQuantitySelector({stock}) {
    const [itemQuantity, setItemQuantity] = useState(0);
    const increaseQuantity = useCallback(()=>{
        if(itemQuantity == stock){
            return
        }
        setItemQuantity(itemQuantity + 1)
    }, [itemQuantity, stock])
    const decreaseQuantity = useCallback(()=>{
        if(itemQuantity === 0) {
            return
        }
        setItemQuantity(itemQuantity - 1)
    }, [itemQuantity])

    return (
        <div>
        <button onClick={decreaseQuantity} className='decreaseButton'/>
        <input className='quantityInput' type={'text'} value={itemQuantity} readOnly/>
        <button onClick={increaseQuantity} className='increaseButton'/>
        </div>
    )
}

export default ItemQuantitySelector
