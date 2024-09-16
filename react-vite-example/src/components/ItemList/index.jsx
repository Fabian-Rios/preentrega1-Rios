import { useState, useEffect } from "react";
import Item from "../Item";

const itemsMock = [
    { id:1, name:'producto1'},
    { id:2, name:'producto2'},
    { id:3, name:'producto3'}

]
const ItemList = () => {
    let [items, setItems] = useState(itemsMock);
    useEffect(() => {
        fetch('/')
    }, []);

    return (
        <>
        {items.map(item => {
            return <Item key={item.id} id={item.id} name={item.name}/>
        })}
        </>
    );
}

export default ItemList