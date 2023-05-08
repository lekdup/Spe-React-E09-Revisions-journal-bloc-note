import { useState } from 'react';
import './Form.scss';

function Form({ notes, setNotes }) {
    const [note, setNote] = useState({
        text: "",
    });

    const now = new Date().getTime()/1000 | 0;
    console.log(now);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes([...notes, {
            id: Math.max(...notes.map((n) => n.id)) + 1,
            timestamp: now,
            text: note.text 
        }])
        setNote({text: ""});
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                className="form-text"
                placeholder="Vos mots..."
                value={note.text}
                onChange={(e) => setNote({...note, text: e.target.value})}
            />
            <button
                type="submit"
                className="form-btn"
            >
                Ajouter
            </button>
        </form>
    )
}

export default Form;