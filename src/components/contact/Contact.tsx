import Styles from "./contact.module.css";

const Contact = () => {
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send mail");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact Artyfy</h2>
      <form onClick={(e) => sendMail(e)} action='' className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Text input:
        </label>
        <textarea required className={Styles.textArea} name='' id=''></textarea>
        <label className={Styles.label} htmlFor=''>
          Mail:
        </label>
        <input className={Styles.input} type='email' required />
        <button className='btn'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
