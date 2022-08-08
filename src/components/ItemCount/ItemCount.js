import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

function ItemCount( { initial, stock }) {
    const [count, setCount] = useState(initial)

    const handleAdd = () => (count < stock) && setCount(count + 1);
    const handleRemove = () => (count > initial) && setCount(count - 1);
    const onAdd = () => stock > 0 ? alert(`${count} unidades agregadas`) : alert(`No hay stock`);

    let backStock = (stock > 0) ? '' : 'grey';

  return (
    <>
        <div className='itemcount__container'>
            <div className='itemcount__controls'>
                <Tooltip title="Restar unidad">
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleRemove()}>
                        -
                    </IconButton>
                </Tooltip>

                <p>{count}</p>

                <Tooltip title="Agregar unidad">
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAdd()}>
                        +
                    </IconButton>
                </Tooltip>
            </div>

            <Button variant='contained' size="small" onClick={() => onAdd()} style={{backgroundColor: backStock}}>Agregar al carrito</Button>
        </div>
    </>
  )
}

export default ItemCount