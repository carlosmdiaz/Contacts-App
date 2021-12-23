import React from 'react'
import Contact from './Contact'

function Contactslist(props) {
    return (
        <div className='Contactslist'>
         <Contact
         name = {props.name}
         phoneNumber = {props.phoneNumber}
         image = {props.image}
         />
        </div>
    )
}

export default Contactslist
