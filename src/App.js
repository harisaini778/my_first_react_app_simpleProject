import { useState } from "react";
import './App.css';
import UserInputDetails from './components/UserInputDetails';

function App() {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  
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
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(newUserDetails);
    setUserDetails(newUserDetails);
    setUsername("");
    setAge("");
  }

  return (
    <div className="outer-div container w-50">
    <div className="inner-div container" style={{border:"1px solid black",marginTop:"10px"}}>
      <form>
    <div className="form-group" >
      <label for="username"> Username :</label>
          <input type="text" id="username" className="form-control"
            onChange={handleNameChange} />
        <label for="age"> Age(Years) :</label>
          <input type="number" id="age" className="form-control"
            onChange={handleAgeChange} />
            <button className="btn btn-success" type="button"
            onClick={handleSubmit}>Add User </button>
        </div>
      </form>
      </div>
       <UserInputDetails data={userDetails} />
      </div>
  );
}

export default App;
