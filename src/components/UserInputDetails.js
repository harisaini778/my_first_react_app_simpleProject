import { useState, useEffect } from "react";
const UserInputDetails = (props) => {

    const [userDetails, setUserDetails] = useState([]);
    useEffect(()=>{
        if (props.data) {
        const keys = Object.keys(props.data);
        const newUserDetails = keys.map((key) => props.data[key]).join(" ");
        setUserDetails((prevList)=>[...prevList,newUserDetails])
    }
    }, [props.data]);

        if (!props.data) {
        return null;
    }

    return (
     <div className="container" style={{ marginTop: "20px", border: "1px solid black" }}>
            {userDetails.map((key, index) => {
                return (<ul id={index} className="bg bg-light"
                    style={{
                        listStyleType: "none", border: "2px solid green",
                        marginTop: "10px"
                    }}>
                <li style={{
                    marginTop:"10px",fontFamily:"monospace",fontSize:"20px"}}>
                    {key}
                </li>
            </ul>)       
            })}
            
    </div>
   
 )
}
export default UserInputDetails;