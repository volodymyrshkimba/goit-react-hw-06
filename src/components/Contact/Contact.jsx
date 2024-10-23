import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function Contact({ contact }) {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaPhone />
          {contact.name}
        </p>
        <p>
          <IoPerson />
          {contact.number}
        </p>
      </div>
      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}

export default Contact;
