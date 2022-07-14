function Note (props) {
    return (
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p className="content">I{props.content}</p>
        </div>
    );
}

export default Note;