import { useState } from "react";
import Styles from "./login.module.css";

interface Users {
  username: String;
  password: String;
  email: String;
  userImg?: String;
  upLoadedArt?: String[];
}

interface Props {
  users: Users[];
}

const Login: React.FC<Props> = ({ users }) => {
  const [userName, setUserName] = useState<String | Number>("");
  const [password, setPassword] = useState<String | Number>("");

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find((user) => user.username === userName);
    if (user && user.password === password) {
      console.log(user);
    }
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form onClick={(e) => handleClick(e)} className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Username:
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className={Styles.input}
          type='text'
        />
        <label className={Styles.label} htmlFor=''>
          Password:
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={Styles.input}
          type='password'
        />
        <p className={Styles.createAccount}>Create account ?</p>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;
