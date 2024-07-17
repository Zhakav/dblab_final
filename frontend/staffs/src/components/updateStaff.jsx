import React, { useState } from "react";
import {useNavigate,useLocation} from "react-router-dom";
import axios from 'axios';

function UpdateStaff() {
    const navigate=useNavigate();
    const location=useLocation();
    const {currStaff} = location.state;
  const [staff, setStaff] = useState(currStaff);


  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.put(`http://127.0.0.1:8080/staff`,{
        id: currStaff.id,
        fname: staff.fname,
        lname: staff.lname,
        email: staff.email,
        salary: staff.salary,
        birth_date: staff.birth_date,
        address: staff.address,
        gender: staff.gender,
        phone_number: staff.phone_number,
        staffType: staff.staffType,
    },{
        headers: {
            Authorization: JSON.parse(token)
        }
    }).then(response => {console.log(response.date)
        navigate('/')
    }).catch(err => {console.log(err)})
  };

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    const updatedField = { [fieldName]: value };
    setStaff((prev) => {
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
     {!staff ? <p>loading...</p> : (
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
                 value={staff.fname}
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
                 value={staff.lname}
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
                 value={staff.email}
               />
             </div>
             <div style={{ width: "90%" }}>
               {" "}
               <label htmlFor="salary">Salary: </label>
               <input
                 style={{ width: "100%" }}
                 type="number"
                 name="salary"
                 onChange={onChangeHandler}
                 value={staff.salary}
               />
             </div>
             <div style={{ width: "90%" }}>
               {" "}
               <label htmlFor="birth_date">Birth Date: </label>
               <input
                 style={{ width: "100%" }}
                 type="date"
                 name="birth_date"
                 onChange={onChangeHandler}
                 value={staff.birth_date}
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
                 value={staff.address}
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
                 value={staff.phone_number}
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
                   value="M"
                   onChange={onChangeHandler}
                   checked={staff.gender === "M"}
                 />
               </label>
               <label htmlFor="genderFemale">
                 Female
                 <input
                   type="radio"
                   name="gender"
                   id="genderFemale"
                   value="F"
                   onChange={onChangeHandler}
                   checked={staff.gender === "F"}
                 />
               </label>
             </div>
             <div style={{ width: "90%" }}>
               {" "}
               <label htmlFor="staffType">Staff Type: </label>
               <select
                 name="staffType"
                 style={{ width: "100%" }}
                 onChange={onChangeHandler}
                 value={staff.staffType}
               >
                 <option value="Purchase Assistant">Purchase Assistant</option>
                 <option value="Sales Assistant">Sales Assistant</option>
               </select>
             </div>

             <button type="submit">submit</button>
           </form>
     )}
    </div>
  );
}

export default UpdateStaff;
