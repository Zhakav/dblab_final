import React, { useState } from "react";

function AddStaff() {
  const [staff, setStaff] = useState({
    fname: "",
    lname: "",
    email: "",
    salary: 0,
    birthDate: "",
    address: "",
    phoneNum: "",
    gender: "",
    staffType: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(staff);
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
          <label htmlFor="birthDate">Birth Date: </label>
          <input
            style={{ width: "100%" }}
            type="date"
            name="birthDate"
            onChange={onChangeHandler}
            value={staff.birthDate}
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
            value={staff.phoneNum}
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
              checked={staff.gender === "Male"}
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
              checked={staff.gender === "Female"}
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
    </div>
  );
}

export default AddStaff;
