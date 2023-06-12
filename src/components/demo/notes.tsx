import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewNoteInput from "./new-note-input";
import { NotesState } from "../../reducers/note-reducer";
import { addNote } from "../../actions/note-action";
const Notes = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
