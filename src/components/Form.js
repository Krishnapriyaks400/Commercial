import React from 'react'

function Form() {
  return (
    <div class ="formcont">
      <form >
   
    <input type="text" id="fname" name="email/phone number" placeholder="email/phone number"></input>
     
     <br/>
      <input type="submit" value="Request OTP"></input>
      
  </form>

 <p ><a href="default.asp" target="_blank">Create account</a></p>
    </div>
  )
}

export default Form
