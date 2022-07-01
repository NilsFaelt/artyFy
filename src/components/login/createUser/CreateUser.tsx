import { Link } from "react-router-dom";
import Styles from "./createUser.module.css";

const CreateUser = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Username:
        </label>
        <input className={Styles.input} type='text' />
        <label className={Styles.label} htmlFor=''>
          Password:
        </label>
        <input className={Styles.input} type='password' />
        <Link className={Styles.link} to={"/login"}>
          <p className={Styles.createAccount}>Login ?</p>
        </Link>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
};

export default CreateUser;
