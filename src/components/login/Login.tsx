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
        <label className={Styles.label} htmlFor=''>
          Username:
        </label>
        <input className={Styles.input} type='text' />
        <label className={Styles.label} htmlFor=''>
          Password:
        </label>
        <input className={Styles.input} type='password' />
        <p className={Styles.createAccount}>Create account ?</p>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;
