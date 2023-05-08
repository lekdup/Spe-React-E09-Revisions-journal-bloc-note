function ReadOnly({ note, handleEditNote, handleClick, dates }) {
    return (
        <>
        <div className='NotesList-container-header'>
            <p className='NotesList-date'>{dates[note.id - 1]}</p>
            <button
                className='NotesList-delete'
                onClick={handleClick}
            >
                ❌
            </button>
            <button
                className='NotesList-edit'
                onClick={(e) => handleEditNote(e, note)}
            >
                ✎
            </button>
        </div>
        <p className='NotesList-text'>{note.text}</p>
        </>
    )
}

export default ReadOnly;