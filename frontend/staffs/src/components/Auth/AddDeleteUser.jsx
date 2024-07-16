import React, { useContext, useState } from "react";
import UserContext from "../../store/UserContext";

function AddDeleteUser() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    birthDate: "",
    address: "",
    phoneNum: "",
    gender: "",
    pass: "",
  });
  const userCtx = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    userCtx.addUser(user);
  };

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

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddDeleteUser;
