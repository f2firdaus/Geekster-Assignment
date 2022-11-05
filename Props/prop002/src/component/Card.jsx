// import image1 from '../image1.jpg'
const Card = (props) => {
   
    const bg = {
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: 'no-repeat',
        width: '800px',
        height:'800px'
    }
    return (
        <>
            <div className="div " style={{ ...bg }} >
                <div className="details">
                    <h1>{props.title}</h1>
                    <span className="actor">{props.actor }</span>
                    <span>{props.date}</span>
                    <p className="p">{props.review}</p>
                    
                </div>
               
            </div>
        
        </>
    )
}
export default Card;