import React from 'react'
import AddFiles from './Imgup'

const Contactus = () => {
  return (
    <div>
       <div className="container9">
        
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
       
      </div>
    </div>
  )
}

export default Contactus