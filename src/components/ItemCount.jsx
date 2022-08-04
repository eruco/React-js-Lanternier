import React from 'react';

function ItemCount (props){
    const [clicks, setClicks] = React.useState(1);

    function handleIncrement () {
        if (clicks < props.stock){
            setClicks (clicks + 1);
        } else {
            alert("Alcansaste el máximo de stock")
        }
    }
    function handleDecrement () {
        if (clicks > props.initial){
            setClicks (clicks - 1);
        } else {
            alert("tenes que llevar al menos un producto")
        }
    }
    const onAdd = () => {
    alert("has agregado al carrito")
    }
    return(
        <div className='counter-container'>
            <h3>Contador</h3>
            <div className='buttons-container'>
                <button onClick={handleDecrement}> - </button>
                <h3>{clicks}</h3>
                <button onClick={handleIncrement}> + </button>
            </div>
            <div className='cartButtonContainer'>
                <button onClick={onAdd}>"Agregar al carrito"</button>
            </div>
        </div>
    )
}

export default ItemCount;