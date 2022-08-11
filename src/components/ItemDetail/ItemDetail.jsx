import React from 'react'
import Item from '../Item/Item';

function ItemDetail({ data }) {
    return(
        data.map((element) => <Item key={element.key} name={element.name} type={element.type} price={element.price} stock={element.stock} img={element.img}/>)
    );
}

export default ItemDetail