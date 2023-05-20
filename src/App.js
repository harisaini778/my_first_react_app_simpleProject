import { useState,Fragment,useRef} from "react";
import ReactDOM from "react-dom";
import './App.css';
import ErrorModal from "./components/ErrorModal";
import UserInputDetails from './components/UserInputDetails';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const [userDetails, setUserDetails] = useState(null);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInputRef);
    console.log(nameInputRef.current.value);
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const newUserDetails = {
      username: enteredUserName,
      age: enteredUserAge
    };
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Error!",
        message:"Name field cannot be empty,please enter a valid name."
      })
      return;
    }
    if (+enteredUserAge < 1) {
      setError(
        {
          title: "Error!",
          message :"Please enter a valid age(age>1)"
        }
      )
      return;
    }
    console.log(newUserDetails);
    setUserDetails(newUserDetails);
  
  }

  const errorHandleChange = () => {
    setError(null);
  }

  const modalRoot = document.getElementById("modal-root");

  return (
    <Fragment>
      {ReactDOM.createPortal(error && <ErrorModal title={error.title} message={error.message} onClose={errorHandleChange} />,
      modalRoot)}
      <Card>
        <Wrapper>
          <form>
            <div className="form-group" >
              <label htmlFor="username"> Username :</label>

              <input type="text" id="username" className="form-control" 
                ref={nameInputRef} />
              
              <label htmlFor="age"> Age(Years) :</label>

              <input type="number" id="age" className="form-control"
                ref={ageInputRef} />
              
              <button className="btn btn-success" type="button" onClick={handleSubmit}>Add User</button>
            </div>
          </form>
        </Wrapper>
         </Card> 
        <UserInputDetails data={userDetails} />
      </Fragment>
    
  );
}

export default App;
