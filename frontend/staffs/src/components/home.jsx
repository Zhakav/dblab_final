import React, { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from '../store/UserContext'

function Home() {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext)
  const [modal, setModal] = useState({ showModal: false, id: 0 });
  const [staffs, setStaffs] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem('token');
    console.log(token);
    if(!token){
        navigate('/login')
    }else{
        axios.get('http://127.0.0.1:8080/staff/all',{
        headers: {
            Authorization:  JSON.parse(token),
        }}).then(response=>{
        setStaffs(response.data)
            console.log(response.data)
        }).finally(()=> setLoading(false));
    }
  },[navigate])

  const addClicked = () => {
    navigate("/add");
  };

  const deleteClicked = (id) => {
    const updatedStaffs = staffs.filter((staff) => staff.id !== id);
        const token = localStorage.getItem('token');
        axios.delete(`http://127.0.0.1:8080/staff/${id}`,{
        headers: {
            Authorization: JSON.parse(token)
        }}).then(response => navigate('/')).catch(err =>console.error(err))
    setStaffs(updatedStaffs);
    setModal({ showModal: false, id: 0 });
  };

  const editClicked = (id) => {

   const token = localStorage.getItem('token')
      axios.get(`http://127.0.0.1:8080/staff/${id}`,{
          headers : {
              Authorization: JSON.parse(token)
          }
      }).then(response =>  navigate(`/update`,{state: {currStaff: response.data}})).catch(error => console.log(error));


  };



  return (
    <div className="container">
    {!staffs ? <p>loading...</p> :   <>
     <button className="addBtn" onClick={addClicked}>
                                              Add
                                            </button>
                                            <table>
                                              <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Salary</th>
                                                <th>Birth Date</th>
                                                <th>Address</th>
                                                <th>Gender</th>
                                                <th>Phone Number</th>
                                                <th>Type</th>
                                                <th>Actions</th>
                                              </tr>
                                              {staffs.map((staff) => (
                                                <tr>
                                                  <td>{staff.fname} {staff.lname}</td>
                                                  <td>{staff.email} </td>
                                                  <td>{staff.salary}</td>
                                                  <td>{staff.birth_date}</td>
                                                  <td>{staff.address}</td>
                                                  <td>{staff.gender}</td>
                                                  <td>{staff.phone_number}</td>
                                                  <td>{staff.staffType}</td>
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
                                              <button onClick={()=> navigate('/addDeleteUser')}>Add or delete a user</button>
                                            </>}
    </div>
  );
}

export default Home;
