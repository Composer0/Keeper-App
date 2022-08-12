import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



function App() {

  const[message, setMessage] = useState([]);


  function addNote(note) {

    setMessage(prevValues => {
      return [...prevValues, note];
    })
  }

  function deleteNote(id) {
    setMessage((prevNote) => {
      return prevNote.filter((message, index) => {
        return index !== id;
      })
    })
  }

  

//All I needed to do differently here was to reference the item in the object for title and content in order to render one note instead of two.
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      <ul>
        {message.map((keeperMessages, index) => 
      <Note 
        key={index} 
        id={index} 
        title={keeperMessages.title} 
        content={keeperMessages.content} 
        onChecked={deleteNote}
        />
        )}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
