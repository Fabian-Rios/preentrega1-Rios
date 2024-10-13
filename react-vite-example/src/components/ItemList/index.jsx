import { useEffect } from "react";
import Card from '../Card'


const ItemList = ({items}) => {
    useEffect(() => {
        fetch('/')
    }, []);

    return (
        <>
        {items.map(item => {
            return <Card key={item.id} img={item.img} description={item.description} name={item.name}/>
        })}
        </>
    );
}

export default ItemList