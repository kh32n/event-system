import React from 'react';
import SignupForm from '../components/SignupForm';
import Axios from 'axios'

function SignupPage() {
  const addUser = (username, email, password) => {
    Axios.post('http://localhost:3001/api/user/create', { username, email, password })
      .then(() => {
        alert("登録が完了しました");
      })
      .catch(err => {
        alert(err.response?.data?.error);
      });
  };

  return (
    <div>
      <SignupForm addUser={addUser} />
    </div>
  )
}
export default SignupPage;
