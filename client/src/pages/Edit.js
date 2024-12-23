import React from 'react';
import EditForm from '../components/EditForm';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Edit() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userID")
  const updateUser = (username, email, password) => {
    Axios.put('http://localhost:3001/api/user/update', {userId, username, email, password })
      .then(() => {
        alert("更新が完了しました");
        navigate("/user-profile")

      })
      .catch(err => {
        alert(err.response?.data?.error);
      });
  };

  return (
    <div>
      <EditForm updateUser={updateUser} />
    </div>
  )
}
export default Edit;
