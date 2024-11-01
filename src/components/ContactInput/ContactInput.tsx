import React from 'react'

function ContactInput({type,name,place}:{type:string,name:string,place:string}) {
  return (
    <>
     <input type={type} name={name} id="" placeholder={place} required/> 
    </>
  )
}

export default ContactInput
