function Editable({ editFormData, handleEditNote, dates, note }) {
    return (
        <>
        <div className='NotesList-container-header'>
            <p className='NotesList-date'>{dates[note.id - 1]}</p>
            <button
                className='NotesList-cancel'
            >
                ❌
            </button>
            <button
                className='NotesList-save'
            >
                ✅
            </button>
        </div><textarea
                placeholder="Vos mots..."
                className="form-text"
                value={editFormData.text}
                onChange={handleEditNote}
                rows={4} />
        </>
    )
}

export default Editable;