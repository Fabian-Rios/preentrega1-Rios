import { useNavigate } from "react-router-dom";


const Item = ({ name, id }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate('/item/' + id)
        }}>
            <h2>
                {name}
            </h2>
        </div>
    )
};

export default Item;