import './NotesList.scss';

function NotesList({ notes }) {
    const dates = notes.map((note) => {
        const date = new Date(note.timestamp * 1000);
        return date.toLocaleString();
    })
    console.log(dates);
    return (
        <div className='NotesList'>
            {notes.map((note) => (
                <div className='NotesList-container'  key={note.id}>
                    <div className='NotesList-container-header'>
                        <p className='NotesList-date'>{dates[note.id - 1]}</p>
                        <button
                            className='NotesList-delete'
                            // onClick={}
                        >
                            x
                        </button>
                        <button className='NotesList-edit'>e</button>
                    </div>
                    <p className='NotesList-text'>{note.text}</p>
                </div>
            ))}
        </div>
    )
}

export default NotesList;