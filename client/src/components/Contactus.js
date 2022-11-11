import React from 'react'
import "../css/contact.css";
function Contactus() {
  return (
    <div>
         <h3>Contact Form</h3>
        <div className="containerff">
          <form >
            <label htmlFor="fname">First Name</label>
            <input type="textt" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="textt" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
    </div>
  )
}

export default Contactus