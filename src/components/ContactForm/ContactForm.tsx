import ContactButton from "../ContactButton/ContactButton"
import ContactInput from "../ContactInput/ContactInput"
import ContactLabel from "../ContactLabel/ContactLabel"
import ContactTextarea from "../ContactTextarea/ContactTextarea"

function ContactForm() {
  return (
    <form action='' className="contact-form">
      <ContactLabel label="User Name"/>
      <ContactInput name="user" type="text" place="Enter Your Name"/>
      <ContactLabel label="User Email"/>
      <ContactInput name="email" type="email" place="Enter Your Email"/>
      <ContactLabel label="Phone Number"/>
      <ContactInput name="user" type="number" place="Enter Your Number"/>
      <ContactLabel label="Enter Your Message"/>
      <ContactTextarea/>
      <ContactButton/>
    </form>
  )
}

export default ContactForm
