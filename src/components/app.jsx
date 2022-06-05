import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [addNewNotes,setAddNewNotes]=useState([]);
    function addNote(note){
        setAddNewNotes(prev=>{
            return [...prev,note]
        })
    }
    function deleteNote(id){
        setAddNewNotes(prevValue=>{
            return prevValue.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }
    return(
        <>
        <Header/>
        <CreateArea
            onAdd={addNote}
        />
        {addNewNotes.map((notes,index)=>{
            return <Note
                key={index}
                id={index}
                title={notes.title}
                content = {notes.content}
                onDelete={deleteNote}
            />
        })}
        
        <Footer/>
        </>
    );
}
export default App;