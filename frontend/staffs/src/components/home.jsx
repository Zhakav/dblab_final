import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [modal, setModal] = useState({ showModal: false, id: 0 });
  const [staffs, setStaffs] = useState([
    { id: 1, name: "test" },
    { id: 2, name: "test1" },
    { id: 3, name: "test2" },
    { id: 4, name: "test3" },
    { id: 5, name: "test4" },
    { id: 6, name: "test5" },
  ]);

  const addClicked = () => {
    navigate("/add");
  };

  const deleteClicked = (id) => {
    const updatedStaffs = staffs.filter((staff) => staff.id !== id);
    setStaffs(updatedStaffs);
    setModal({ showModal: false, id: 0 });
  };

  const editClicked = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="container">
      <button className="addBtn" onClick={addClicked}>
        Add
      </button>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
        {staffs.map((staff) => (
          <tr>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
            <td>
              <button
                className="deleteBtn"
                onClick={() => setModal({ showModal: true, id: staff.id })}
              >
                Delete
              </button>
              <button
                className="updateBtn"
                onClick={() => editClicked(staff.id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className={modal.showModal ? "backdrop" : "backdropNone"}>
        <div className={modal.showModal ? "modal" : "modalNone"}>
          <p>Are you sure you want to delete this staff?</p>
          <div>
            <button onClick={() => deleteClicked(modal.id)}>Yes</button>
            <button onClick={() => setModal({ showModal: false, id: 0 })}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
