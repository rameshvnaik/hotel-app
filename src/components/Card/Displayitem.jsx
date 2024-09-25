import { useEffect, useState } from 'react'
import React from 'react'
import Itemcard from './Itemcard'
import './Displayitem.scss'

const Displayitem = () => {
    const [items, setItems] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            setItems(data.recipes);
            console.log(data.recipes)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
   
        <div className="item-container">
        {items && items.map((item) => (
          <Itemcard key={item.id} item={item} />
        ))}
      </div>
    )
}

export default Displayitem