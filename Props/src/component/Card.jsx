const Card = (prop) => {
  let colors = {
    backgroundColor: prop.colorCode,
  }
  let fontIncrease = {
    fontSize: '24px',
    fontWeight: 'bold',
    
  }
  return (
    <>
      <div className="div">
      <div style={{...colors}} className="div2">
        
      </div>
        <span style={{ ...fontIncrease, }}>{prop.title}</span>
        <span style={{color:prop.colorCode}}>{prop.name} </span>  
      </div>
      
    </>
  );
};
export default Card;
