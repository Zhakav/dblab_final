import React, { useContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import UserContext from "../../store/UserContext";
import axios from 'axios';

function AddDeleteUser() {
const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [user,setUser] = useState({})
  const userCtx = useContext(UserContext);


  useEffect(() =>{

  const token = localStorage.getItem('token')
    axios.get('http://127.0.0.1:8080/user/all',{
        headers: {
            Authorization: JSON.parse(token)
        }
    }).then(response => {
        console.log(response.date)
        setUsers(response.data)
    }).catch(err => {console.log(err)});
  },[])


  const submitHandler = (e) => {
    e.preventDefault();
     userCtx.addUser(user,()=>navigate('/'));
  };

  const deleteHandler = (id)=>{
    userCtx.removeUser(id,()=> navigate('/'));
  }


    const addClicked = ()=>{
        setShow(true)
    }

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    const updatedField = { [fieldName]: value };
    setUser((prev) => {
      return {
        ...prev,
        ...updatedField,
      };
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

        {users.length > 0 ?  <div> <button className="addBtn" onClick={addClicked}>
                                                                   Add
                                                                 </button>
                                                                 <table>
                                                                   <tr>
                                                                     <th>Name</th>
                                                                     <th>Email</th>
                                                                     <th>Birth Date</th>
                                                                     <th>Address</th>
                                                                     <th>Gender</th>
                                                                     <th>Phone Number</th>
                                                                     <th>Actions</th>
                                                                   </tr>
                                                                   {users.map((cuser) => (
                                                                     <tr>
                                                                       <td>{cuser.fname} {cuser.lname}</td>
                                                                       <td>{cuser.email} </td>
                                                                       <td>{cuser.birth_date}</td>
                                                                       <td>{cuser.address}</td>
                                                                       <td>{cuser.gender}</td>
                                                                       <td>{cuser.phone_number}</td>
                                                                       <td>
                                                                         <button
                                                                           className="deleteBtn"
                                                                           onClick={()=> deleteHandler(cuser.id)}
                                                                         >
                                                                           Delete
                                                                         </button>
                                                                       </td>
                                                                     </tr>
                                                                   ))}
                                                                 </table>
                                                                 </div>
 : <p>loading...</p>}

    {show && (
          <form
                action=""
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "25px",
                }}
                onSubmit={submitHandler}
              >
                <div style={{ width: "90%" }}>
                  <label htmlFor="fname">First Name: </label>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    name="fname"
                    onChange={onChangeHandler}
                    value={user.fname}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="lname">LastName: </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    name="lname"
                    onChange={onChangeHandler}
                    value={user.lname}
                  />
                </div>
                         <div style={{ width: "90%" }}>
                                  {" "}
                                  <label htmlFor="username">Username: </label>
                                  <input
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="username"
                                    onChange={onChangeHandler}
                                    value={user.username}
                                  />
                                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="email">Email: </label>
                  <input
                    style={{ width: "100%" }}
                    type="email"
                    name="email"
                    onChange={onChangeHandler}
                    value={user.email}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="birthDate">Birth Date: </label>
                  <input
                    style={{ width: "100%" }}
                    type="date"
                    name="birthDate"
                    onChange={onChangeHandler}
                    value={user.birthDate}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="address">Address: </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    name="address"
                    onChange={onChangeHandler}
                    value={user.address}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="phoneNum">Phone Number: </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    name="phoneNum"
                    onChange={onChangeHandler}
                    value={user.phoneNum}
                  />
                </div>
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <label htmlFor="gender">Gender: </label>
                  <label htmlFor="genderMale">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="genderMale"
                      value="Male"
                      onChange={onChangeHandler}
                      checked={user.gender === "Male"}
                    />
                  </label>
                  <label htmlFor="genderFemale">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      value="Female"
                      onChange={onChangeHandler}
                      checked={user.gender === "Female"}
                    />
                  </label>
                </div>
                <div style={{ width: "90%" }}>
                  {" "}
                  <label htmlFor="pass">Password: </label>
                  <input
                    style={{ width: "100%" }}
                    type="password"
                    name="pass"
                    onChange={onChangeHandler}
                    value={user.pass}
                  />
                </div>

                <button type="submit">Add</button>
              </form>
    )}



    </div>
  );
}

export default AddDeleteUser;
