import Note from "./Note.jsx";

function CreateNote(message) {
    return <
    Note
    key={message.key}
    title={message.title}
    content={message.content}
    />
}

export default CreateNote