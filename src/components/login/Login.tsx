import Styles from "./login.module.css";

const Login: React.FC = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form className={Styles.form}>
        <label htmlFor=''>Username:</label>
        <input type='text' />
        <label htmlFor=''>Password:</label>
        <input type='password' />
        <p className={Styles.createAccount}>Create account ?</p>
        <button onClick={(e) => handleClick(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
