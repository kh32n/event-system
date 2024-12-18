import { useState } from "react";
import '../styles/Signup.css'
function Sighup() {

  const [userID, setUserID] = useState('');
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userID: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { userID: '',email:"", password: '' };
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!userID.trim()) {
      newErrors.userID = 'ユーザーIDを入力してください。';
      isValid = false;
    }
    if (!email.trim()) {
        newErrors.email = 'メールアドレスを入力してください。';
        isValid = false;
      } else if(emailPattern.test(email.value)){
        newErrors.email = "有効なメールアドレスを入力してください"
        isValid = false;
      }


    if (!password.trim()) {
      newErrors.password = 'パスワードを入力してください。';
      isValid = false;
    } 

    setErrors(newErrors);

    if (isValid) {
        //TODO:データベースに登録、終了後登録完了画面？
      alert('ログイン情報が送信されました！');
    }
  };

  return (
    <div className="formContainer">
      <h1 className="title">新規登録</h1>
      <hr />
      <form className="form" onSubmit={handleSubmit}>
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
          <label htmlFor="email">メールアドレス：</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力してください"
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
        <div className="buttonContainer">
            <button className="signup" type="submit">登録</button>
        </div>
      </form>
    </div>
  );
}

export default Sighup;
