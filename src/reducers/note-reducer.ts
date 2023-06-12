import { NoteAction } from "../actions/note-action";
export interface NotesState {
  notes: string[];
}
const initialState = {
  notes: [],
};

export const noteReducer = (
  state: NotesState = initialState,
  action: NoteAction
): NotesState => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
