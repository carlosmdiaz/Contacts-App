import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/


let contacts = [
  {
    name: "Elon Musk",
    phoneNumber: "1-888-518-3752.",
    image: "https://economictimes.indiatimes.com/thumb/msid-84588036,width-1200,height-900,resizemode-4,imgsize-109325/elon-musk.jpg?from=mdr",
  },
  {
    name: "Rihanna",
    phoneNumber: "1-908-423-3923.",
    image: "https://storage.googleapis.com/afs-prod/media/4e791a417bcd4b63a29400c9f164195a/400.jpeg",
  },
  {
    name: "Drake",
    phoneNumber: "1-499-283-9492",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-10-26-at-3-29-32-pm-1603740583.png",
  },
  {
    name: "Lance",
    number: "1-877-393-4448.",
    image: "https://yt3.ggpht.com/ytc/AKedOLSSmstg20Polv3LH4GPl3Ccgt3NmKpN_VEwBLwjdg=s900-c-k-c0x00ffffff-no-rj"
  }
]

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='list-container'>
        <div className="title">
          <h1>Contacts</h1>
        </div>
      {
        contacts.map((contact) => {
          return <Contactslist name = {contact.name} phoneNumber = {contact.phoneNumber} image = {contact.image}/>
                })
      }
      </div>
      
    </div>
  );
}

export default App;
