import React from 'react'
import '../App'


const Contact = () => {

const[email,setEmail]=React.useState('');
const[PhoneNo,setPhoneNo]=React.useState('');



const Save=async()=>{
    console.log(email,PhoneNo);

   

    let result = await fetch("http://localhost:8080/contact", {
        method: 'post',
        body: JSON.stringify({ email,PhoneNo}),
        headers: {
            "Content-Type": "application/json"
        }
    });

    result = await result.json();
    console.log(result);

    alert("saved");
}

  return (



 <div className='info'>
 <label>Contact Us</label>
 <input type="email" placeholder='Enter Your Email' className='inputBox' 
 onChange={(e) => { setEmail(e.target.value) }}
                value={email}
 />
 
    <input type="tel" placeholder=' Phone No:' className='inputBox' 
         onChange={(e) => { setPhoneNo(e.target.value) }}
                value={PhoneNo}
    />
   
 

     <button className='btn' onClick={Save}>Save</button>
 </div>
  )
}

export default Contact
