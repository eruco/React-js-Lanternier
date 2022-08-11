import { useEffect, useState } from 'react';
import itemsData from '../../data/data.js';
import ItemList from '../Itemlist/ItemList.js'

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData[1]), 2000);
  })
}

function ItemDetailContainer () {
    const [data, setData] = useState([]);
    
      useEffect(() => {
          getProducts().then((res) => {
            setData(res);
          });
      }, [])
    
      return (
        <div className='itemlist__container'>
          <div>
            <h2>Detalles</h2>
          </div>
          <div className='items'>
            <ItemList data={data} />
          </div>
        </div>
      )
    }
    
    export default ItemDetailContainer;