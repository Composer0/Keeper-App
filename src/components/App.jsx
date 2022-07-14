import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes.js";
import CreateNote from "./CreateNote";
// import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            {notes.map(CreateNote)}
            <Footer />
        </div>
    )
}

// Alternative... While this works. It takes what could have been a library component away. It is great to see an ES6 arrow function used in this way for the experience, but I ultimately disagree with its current inclusion as using the file CreateNote brings clarity to what is occuring in the code... I am leaving my variation intact for now.
// function App() {
//     return (
//         <div>
//             <Header />
//             {notes.map((message) => 
//             <Note
//                 key={message.key}
//                 title={message.title}
//                 content={message.content}
//                 />)}
//             <Footer />
//         </div>
//     )
// }

export default App