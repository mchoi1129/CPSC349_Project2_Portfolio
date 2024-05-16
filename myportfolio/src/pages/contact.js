import { useState } from "react";
import emailjs from '@emailjs/browser'
import style from './contactform.module.css';

// Contact page to send an email
const Contact = () => {

  // connect to emailjs.com to receive an email
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'default_service', // service ID
        'template_ethdzeb', // template ID
        e.target,
        'WawjxZ_nziJVk32MD' // my public key
      )
      .then((result) => { // success handling
          console.log(result.text);
          setStateMessage("Email sent successfully!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
      }, (error) => { // error handling
          console.log(error.text);
          setStateMessage("Failed to send email.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
      });
    // reset the form after submission
    e.target.reset();
  };

  return (
      <div className={style.background}>
        <div className={style.container}>
            <h1>Contact</h1>
            <form onSubmit={sendEmail}>
              <div className={style.column}>
              <div className={style.leftColumn}>
                  <label for="fname">First Name:</label><br />
                  <input
                    className={style.inputBox}
                    type="text"
                    id="fn"
                    name="fname" required
                    placeholder="First Name"
                  /><br />
                  <label for="lname">Last Name:</label><br />
                  <input
                    className={style.inputBox}
                    type="text"
                    id="ln"
                    name="lname"
                    placeholder="Last Name"
                  /><br />
                </div>
                <div className={style.rightColumn}>
                  <label for="email">Email:</label><br />
                  <input
                    className={style.inputBox}
                    type="email"
                    id="email"
                    name="user_email" required
                    placeholder="Email"
                  /><br />
                  <label for="phone">Phone:</label><br />
                  <input
                    className={style.inputBox}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                  /><br />
                </div>
              </div>
              <label for="message">Message:</label><br />
                  <textarea
                    className={style.messageBox}
                    id="message"
                    name="message" required
                    placeholder="Message"
                  ></textarea><br />
                  <input className={style.button} type="submit" value="Send" disabled={isSubmitting} />
                  {stateMessage && <p>{stateMessage}</p>}
            </form>
        </div>
      </div>
  );
};

export default Contact;