import React from "react";
import Card from "./Card";

const ErrorModal = (props) => {
    const handleOkay = () => {
        if (props.onClose) {
            props.onClose();
        }
    }
    return (
        <div>
            <Card>
            <header>
                <h2 style={{color:"red"}}>
            {props.title}
                </h2>
            </header>
            <div>
                <p style={{color:"white"}}><strong>
            {props.message}
               </strong></p>
            </div>
            <footer>
                <button className="btn btn-danger" onClick={handleOkay}>
                 Okay
                </button>
                </footer>
                </Card>
        </div>
   ) 
}

export default ErrorModal;