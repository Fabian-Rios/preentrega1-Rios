

const Card = ({name, img, description}) => {
    return (
        <div className='card-container'>
            <img src={img} alt="" className='card-img' />
            <h1 className='card-title'>{name}</h1>
            <p className='card-description'>{description}</p>
        </div>
    )
};
export default Card;