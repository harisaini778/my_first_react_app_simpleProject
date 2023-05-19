const Card = (props) => {
    return (
        <div className="card w-50 container  bg bg-dark text-light"
            style={{ border: "1px solid red", marginTop: "10px" }}>
            <div className="card-body ">
            {props.children}
            </div> 
     </div>
 )   
}
export default Card;