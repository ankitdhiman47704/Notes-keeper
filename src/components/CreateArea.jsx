import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setIsExpanded] = useState(false);
    function handleInput(event) {
        const { name, value } = event.target;
        setInputText((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    function expanded() {
        setIsExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleInput} name="title" placeholder="Title" value={inputText.title} />}
                <textarea onClick={expanded} onChange={handleInput} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputText.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;