import React, { useState } from 'react'
import firebase from '../firebase/firebase';

export default function Editor() {
    const ref = firebase.firestore().collection('notes');
    const [note, setNote] = useState('');

    const changeNote = e => {
        setNote(e.target.value);
    }

    const saveNote = () => {
        console.log(note);

        ref.add({ note })
            .then(x => console.log(x))
            .catch((x => console.log(x)));
    }
    return (
        <div>
            <textarea onChange={e => changeNote(e)} style={{ width: '100%' }}></textarea>
            {note}
            <button className="button is-primary" onClick={() => saveNote()}>Save</button>
        </div>
    )
}
