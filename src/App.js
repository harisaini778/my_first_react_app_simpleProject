import { useState } from "react";
import './App.css';
import ErrorModal from "./components/ErrorModal";
import UserInputDetails from './components/UserInputDetails';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState();
  
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserDetails = {
      username: username,
      age: age
    };
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Error!",
        message:"Name field cannot be empty,please enter a valid name."
      })
      return;
    }
    if (+age < 1) {
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
    setUsername(null);
    setAge(null);
  }

  const errorHandleChange = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onClose={ errorHandleChange} />}
      <Card>
        <Wrapper>
          <form>
            <div className="form-group" >
              <label htmlFor="username"> Username :</label>
              <input type="text" id="username" className="form-control" onChange={handleNameChange} />
              <label htmlFor="age"> Age(Years) :</label>
              <input type="number" id="age" className="form-control" onChange={handleAgeChange} />
              <button className="btn btn-success" type="button" onClick={handleSubmit}>Add User</button>
            </div>
          </form>
        </Wrapper>
         </Card> 
        <UserInputDetails data={userDetails} />
      </Wrapper>
    
  );
}

export default App;
