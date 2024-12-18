import React from 'react';
import SignupForm from '../components/SignupForm';
import Axios from 'axios'

function SignupPage() {
    const addUser = (username, email, password) => {
        Axios.post('http://localhost:3001/api/create/users', { username, email, password })
          .then(() => {
            alert("User added successfully");
          })
          .catch(err => {
            alert(username)
            console.error("Error adding user:", err.response ? err.response.data : err.message);
            alert("Failed to add user. Please check the console for more details.");
          });
      };

    return (
        <div>
            <SignupForm addUser={addUser}/>
        </div>
    )
}
export default SignupPage;
