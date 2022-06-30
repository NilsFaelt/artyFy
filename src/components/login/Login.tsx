import Styles from "./login.module.css";

const Login: React.FC = () => {
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form onClick={(e) => handleClick(e)} className={Styles.form}>
        <label htmlFor=''>Username:</label>
        <input type='text' />
        <label htmlFor=''>Password:</label>
        <input type='password' />
        <p className={Styles.createAccount}>Create account ?</p>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;
