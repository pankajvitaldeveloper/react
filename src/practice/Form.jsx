import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {

// const [name, setName] = useState('')
// const [email, setEmail] = useState('')
// const [message, setMessage] = useState('')

const [formData, setFormData] = useState({
  name:'',
  email:'',
  message: '',
});

// const handleChange = (e) => {
//   // console.log(e.target.name, "check");
//   // e.target: Refers to the input field that triggered the change.
//   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // e.target.name: Gets the name attribute of that input field.
//   // e.target.value: Gets the current value the user entered in that input.
// };

const handleChange = (e) => {
const {name,value} = e.target
setFormData({...formData,[name]:value})
// The [name] part is called computed property name in JavaScript.

}

const handlesubmit = (e)=>{
  e.preventDefault()
  alert(`My name is ${formData.name} and email is ${formData.email}`)
}


  return (
    <div className='container mt-5'>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input className='form-control' type="text" id="name" onChange={handleChange}  value={formData.name}   name="name" required />

        <label htmlFor="email">Email</label>
        <input className='form-control' type="email" id="email" onChange={handleChange}  value={formData.email}   name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" className='form-control' name="message" onChange={handleChange}  value={formData.message}  rows="4" required></textarea>

        <div className='mt-3'>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;





// It updates the formData state dynamically based on the input field's name and current value.

// 🧠 Breakdown:
// e: The event object triggered when the input changes.

// e.target: Refers to the input field that triggered the change.

// e.target.name: Gets the name attribute of that input field.

// e.target.value: Gets the current value the user entered in that input.

// Why spread (...formData)?
// This keeps the existing values in formData and only updates the field that changed.

// Without it, you'd overwrite the whole object every time.

