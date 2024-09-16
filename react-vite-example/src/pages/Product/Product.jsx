import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams() 
    return (
        <>
        <h2>productos0</h2>
        <p>{params.id}</p>
        </>
    );
};

export default Product;