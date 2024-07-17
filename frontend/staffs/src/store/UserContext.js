import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UserContext = createContext({
  user: {},
  addUser: (user,navigate) => {},
  removeUser: (userId) => {},
  findUser: (email) => {},
  logUserIn: (user,navigate) => {},
  logUserOut: () => {},
});

const initialCurrUserValue = () => {
  const currUser = localStorage.getItem("user");
  return currUser ? JSON.parse(currUser) : {};
};

export const UserContextProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(initialCurrUserValue);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  const addUserHandler = (user,navigate) => {
console.log(user)
    axios.post('http://127.0.0.1:8080/user/register',{
            lname: user.lname,
            fname: user.fname,
            username: user.username,
            email: user.email,
            password: user.pass,
            birth_date: user.birthDate,
            address: user.address,
            phone_number: user.phoneNum,
            gender: user.gender
    }).then(response => {console.log(response)
        navigate()
    }).catch(err => {console.log(err)})
  };

  const removeUserHandler = (userId,navigate) => {
  const token = localStorage.getItem('token')
    axios.delete(`http://127.0.0.1:8080/user/${userId}`, {
    headers: {
        Authorization: JSON.parse(token)
    }
    })
    .then(response => {console.log(response)

        navigate()
    }).catch(err => {console.log(err)})
  };

  const findUserHandler = (email) => {
    console.log(email);
  };

  const logUserInHandler = (user,navigate) => {
    setLoggedInUser(user);
  axios.post('http://127.0.0.1:8080/user/authenticate', {
       username: user.username,
       password: user.password
     })
     .then(response => {
       const token = response.data.token;
       localStorage.setItem('token', JSON.stringify(token));
       navigate();

     })
     .catch(err => {
       console.log(err);
     });
  };

  const logUserOutHandler = () => {
    setLoggedInUser("");
  };

  const context = {
    user: loggedInUser,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    findUser: findUserHandler,
    logUserIn: logUserInHandler,
    logUserOut: logUserOutHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
