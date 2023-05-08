import { useState } from 'react';
import Editable from './Editable/Editable';
import ReadOnly from './Editable/ReadOnly';
import './NotesList.scss';

function NotesList({ notes }) {
    const dates = notes.map((note) => {
        const date = new Date(note.timestamp * 1000);
        return date.toLocaleString();
    })
    
    console.log(dates);
    const handleClick = (e) => {
        e.target.parentNode.parentNode.classList.add("NotesList-container--none")
    }

    const [editNoteID, setEditNoteID] = useState(null);
    const [editFormData, setEditFormData] = useState({
        text: "",
    })

    const handleEditNote = (e, note) => {
        e.preventDefault();
        setEditNoteID(note.id);

        const formValues = {
            text: note.text
        }

        setEditFormData(formValues);
    };
    
    return (
        <div className='NotesList'>
            {notes.map((note) => (
                <div className='NotesList-container'  key={note.id}>
                    
                    {editNoteID === note.id ? (
                        <form>
                            <Editable
                                editFormData={editFormData}
                                handleEditNote={handleEditNote}
                                dates={dates}
                                note={note}
                            />
                        </form>
                    ) : (
                        <ReadOnly
                            note={note}
                            handleClick={handleClick}
                            handleEditNote={handleEditNote}
                            dates={dates}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default NotesList;