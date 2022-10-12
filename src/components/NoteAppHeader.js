import React from 'react';

function NoteAppHeader({ searchText, onSearch }) {
    return (
        <div className='note-app__header'>
            <h1>CATATMENCATATAPK</h1>
            <div className='note-search'>
                <input type='text' placeholder='Cari Apani... (berdasarkan judul)' value={searchText} onChange={onSearch}></input>
            </div>
        </div>
    )
}

export default NoteAppHeader;