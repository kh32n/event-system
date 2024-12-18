import { useState } from "react";

function Login() {

  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userID: '', password: '' });


  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { userID: '', password: '' };


    if (!userID.trim()) {
      newErrors.userID = 'ユーザーIDを入力してください。';
      isValid = false;
    } 

    if (!password.trim()) {
      newErrors.password = 'パスワードを入力してください。';
      isValid = false;
    } 

    setErrors(newErrors);

    if (isValid) {
      alert('ログイン情報が送信されました！');
    }
  };

  return (
    <div className="formContainer">
      <h1>ログイン</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="userID">ユーザーID：</label>
          <input
            type="text"
            id="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            placeholder="ユーザーIDを入力してください"
          />
          {errors.userID && <p className="error">{errors.userID}</p>}
        </div>
        <div className="inputField">
          <label htmlFor="password">パスワード：</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力してください"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default Login;
