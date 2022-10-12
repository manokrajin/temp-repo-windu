import React from 'react';
import NoteItemText from './NoteItemText.js';
import NoteItemAction from './NoteItemAction.js';

function NoteItem({ title, body, createdAt, id, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemText title={title} body={body} createdAt={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem