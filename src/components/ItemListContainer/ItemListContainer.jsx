import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import itemsData from '../../data/data.js';
import ItemList from '../Itemlist/ItemList';

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000);
  })
}

function ItemListContainer({ title }) {
  const [data, setData] = useState([]);
  
    useEffect(() => {
        getProducts().then((res) => {
          setData(res);
        });
    }, [])
  
  return (
    <div className='itemlist__container'>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='items'>
        <ItemList data={data} />
      </div>
    </div>
  )
}
 
export default ItemListContainer