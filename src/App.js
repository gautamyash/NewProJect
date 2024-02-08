import React, { useState } from "react";
import AddUser from "./components/Add User/AddUser";
import ListItem from "./components/Add User/ListItem";

function App() {
  const [userslist, setUsersList] = useState([]);
  const onListHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUser) => [
      ...prevUser,
      {
        name: uName,
        age: uAge,
        id: Math.random().toString(),
        college: uCollege,
      },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={onListHandler} />
      <ListItem users={userslist} />
    </div>
  );
}

export default App;
