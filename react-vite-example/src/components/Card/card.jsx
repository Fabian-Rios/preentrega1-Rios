import { Link } from 'react-router-dom';

const card = () => {
    return (
        <div className='card-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfU_XvheU0HvDbTvknUed5rWeQ7jl1sX5ow&s" alt="" className='card-img' />
            <h1 className='card-title'>AMD Ryzen 3</h1>
            <p className='card-description'>12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</p>
        </div>
    )
};
export default card;