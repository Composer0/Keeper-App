import React, {useState} from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  // const[titleText, setTitleText] = useState("");
  // const[contentText, setContentText] = useState("");
  const[note, setNote] = useState({
    title: '',
    content: ''
  })

  //Allows Text to be typed into the Title and content areas for the New Note.
  function handleChange(event) {
    const {name, value} = event.target

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  //Having handle change read the name and register value was great. Still trying to wrap my head around what exactly is happening with this bit of code but I will continue to review it for future projects. There are several problems out there that will require this solution. I can easily see that.
// this set up allows for the object being typed into, to be correctly identified which will lead to the screen produce the correct input effect based on the input/textarea being used.

  
let note_serialized = JSON.stringify(note);
let note_deSerialized = JSON.parse(localStorage.getItem('note'));
localStorage.setItem("note", note_serialized)
localStorage.getItem('name')
localStorage.removeItem('name')


// Only strings can be stored into local storage.


// Updates Local Storage actively through each keytype.
function updateLS() {
  const notesText = document.querySelectorAll('create-note')
  
  const notes = []
  
  notesText.forEach(note => notes.push(note.value))
  
  // store into local Storage
  localStorage.setItem('notes', JSON.stringify(notes))
}


function submitNote(event) {
  props.onAdd(note);
  event.preventDefault();
  setNote({
    title: "",
    content: ""});
    updateLS();
    console.log(note_serialized)
    console.log(note_deSerialized)
  }
  
  //  Original idea was to create 2 separate handle and const. I learned that you can create an object through the useState. That changes things immensely.
  // function handleTitleChange(event) {
    //   const newTitleValue = event.target.value;
  //   setNote.title(newTitleValue);
  // }
  
  // function handleContentChange(event) {
  //   const newContentValue = event.target.value;
  //   setNote.content(newContentValue);
  // }
    //Allows Text to be typed into the Title and content areas for the New Note.


  return (
    <div>
      <form className="create-note">
      {/* //note container */}
        <input 
          name="title" 
          required
          placeholder="Title" 
          type="title"
          value={note.title} 
          onChange={handleChange}
        />
{/* create a class to hide input */}

{/* create boolean using in to render input upon textarea focus. On focus have textarea increase from 1 to 3 rows. */}

        <textarea 
          name="content" 
          required
          placeholder="Take a note..." 
          type="content"
          rows="3" 
          value={note.content}
          onChange={handleChange}
        />
      {/* //note container */}

      {/* //button for note */}
      <Zoom in={true}>
        <Fab
          onClick={submitNote}
          ><AddCircleIcon />
          </Fab>
      </Zoom>
        
      {/* //button for note */}

      </form>
    </div>
  );
}

export default CreateArea;
