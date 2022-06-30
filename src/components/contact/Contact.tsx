import Styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact Artyfy</h2>
      <form action='' className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Text input
        </label>
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <label className={Styles.label} htmlFor=''>
          Mail:
        </label>
        <input className={Styles.input} type='text' />
        <button className='btn'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
