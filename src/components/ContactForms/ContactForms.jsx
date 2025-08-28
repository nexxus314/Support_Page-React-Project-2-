import { useState } from "react";
import Buttons from "../Buttons/Button";
import styles from "./ContactForms.module.css";
import { MdCall, MdDisplaySettings, MdMessage } from "react-icons/md";
const ContactForms = () => {
  const [name, setname] = useState("nexxus");
  const [email, setemail] = useState("nexxusnojobs@gmail.com");
  const [text, settext] = useState("nexxus is the best");

  const onSubmit = (event) => {
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
    console.log({
      name,
      email,
      text,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>

        <Buttons
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Buttons text="SUBMIT" />
          </div>
          <div>{name + "" + email + "" + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/image2.svg" alt="image2" />
      </div>
    </section>
  );
};
export default ContactForms;
