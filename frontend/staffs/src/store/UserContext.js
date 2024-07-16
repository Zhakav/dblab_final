import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  user: {},
  addUser: (
    fname,
    lname,
    email,
    address,
    birthDate,
    phoneNum,
    gender,
    pass
  ) => {},
  removeUser: (userId) => {},
  findUser: (email) => {},
  logUserIn: (email, pass) => {},
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

  const addUserHandler = (
    fname,
    lname,
    email,
    address,
    birthDate,
    phoneNum,
    gender,
    pass
  ) => {
    console.log(fname);
  };

  const removeUserHandler = (userId) => {
    console.log(userId);
  };

  const findUserHandler = (email) => {
    console.log(email);
  };

  const logUserInHandler = (user) => {
    setLoggedInUser(user);
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
