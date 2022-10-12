import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';
import NoteInput from './NoteInput';
import NoteAppHeader from './NoteAppHeader';

class NoteAppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: ""
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            };
        });
    }


    render() {
        const search = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const searchResult = search.filter((note) => {
            return note.archived === false;
        });
        return (
            <>
                <NoteAppHeader searchText={this.state.search} onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={searchResult} onDelete={this.onDeleteEventHandler} />
                </div>
            </>
        );
    }
}

export default NoteAppBody;