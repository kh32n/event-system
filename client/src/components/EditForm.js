import { useState } from "react";
import '../styles/Signup.css';

function SignupForm({ updateUser }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  //ボタンを押したときの処理
  const handleSubmit = (e) => {
    e.preventDefault(); // フォーム送信時にページがリロードされないようにする

    let isValid = true;
    //メールアドレスのバリデーション
    const newErrors = { userID: '', email: '', password: '' };
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!username.trim()) {
      newErrors.username = 'ユーザーIDを入力してください。';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'メールアドレスを入力してください。';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'パスワードを入力してください。';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      updateUser(username, email, password);
    }
  };

  return (
    <div className="formContainer">
      <h1 className="title">ユーザー更新</h1>
      <hr />
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="username">ユーザーID：</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ユーザーIDを入力してください"
          />
          {/*エラーがあった際に表示*/}
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
          {/*エラーがあった際に表示*/}
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
          {/*エラーがあった際に表示*/}
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="buttonContainer">
          <button className="signup" type="submit">登録</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
