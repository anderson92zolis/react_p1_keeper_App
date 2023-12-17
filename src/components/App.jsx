import React from "react"
import Note from "./Note"
import Footer from "./Footer"
import Header from "./Header"
import notes from "../notes"



function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (<Note
        key={note.key}
        title={note.title}
        content={note.content}
      />))}  {/*  here is not necesarry put again the Note because it is already in the Arrow function iterateNotes */}
      <Footer />
    </div>
  )
}


export default App