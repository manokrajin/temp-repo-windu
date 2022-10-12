import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            title: '',
        }

        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxTitle = 50;
        this.setState(() => {
            return {
                title: event.target.value.slice(0, maxTitle),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__max-title">Sisa Karakter {50 - this.state.title.length}</p>
                    <input type="text" required placeholder="Isi Judul Note ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea type="text" required placeholder="Catet Boiiiii ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit"> Buat </button>
                </form>
            </div>
        )
    }
}

export default NoteInput;