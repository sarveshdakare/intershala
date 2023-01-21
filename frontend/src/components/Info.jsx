import React from 'react'
import '../App'


const Info = () => {

const[name,setName]=React.useState('');
const[companyname,setComname]=React.useState('');
const[position,setPos]=React.useState('');
const[DateOfJoining,setDatej]=React.useState('');
const[DateOfResign,setDater]=React.useState('');
const[skill,setSkill]=React.useState('');
const[Experience,setExper]=React.useState('');


const Save=async()=>{
    console.log(name,companyname,position,DateOfJoining,DateOfResign,skill,Experience);

   

    let result = await fetch("http://localhost:8080/info", {
        method: 'post',
        body: JSON.stringify({ name,companyname,position,DateOfJoining,DateOfResign,skill,Experience }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    result = await result.json();
    console.log(result);

    alert("Product is added");
}

  return (



 <div className='info'>

 <label htmlFor="">Personal Information</label>
 <input type="text" placeholder='Enter Your Name' className='inputBox' 
 onChange={(e) => { setName(e.target.value) }}
                value={name}
 />
    <label htmlFor="">Experience</label>
    <input type="text" placeholder=' Company Name' className='inputBox' 
         onChange={(e) => { setComname(e.target.value) }}
                value={companyname}
    />
    <input type="text" placeholder='Position' className='inputBox'
   onChange={(e) => { setPos(e.target.value) }}
                value={position}
   />
    <input type="Date" placeholder='Date of joining' className='inputBox'

onChange={(e) => { setDatej(e.target.value) }}
                value={DateOfJoining}
    />
    <input type="Date" placeholder='Date of Resign' className='inputBox'
        onChange={(e) => { setDater(e.target.value) }}
                value={DateOfResign}
    />
    <label htmlFor="">Skills</label>
    <input type="text" placeholder='Skill Name' className='inputBox'
    onChange={(e) => { setSkill(e.target.value) }}
                value={skill}
     />
    <input type="text" placeholder='Year Of Experinence' className='inputBox'
    onChange={(e) => { setExper(e.target.value) }}
                value={Experience}
     />

     <button className='btn' onClick={Save}>Save</button>
 </div>
  )
}

export default Info
