import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact(props) {
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src={props.image}alt=""></img>
            </div>

            <div className="contactInfo">
                <h2>{props.name}</h2>
                <h2>{props.phoneNumber}</h2>
            </div>
        </div>
    )
}

export default Contact
