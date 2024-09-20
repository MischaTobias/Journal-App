import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    activeNote: null,
    // active: {
    //   id: "123",
    //   title: "",
    //   body: "",
    //   date: 123456789,
    //   imageURLs: [], // https://foto1.jpg, https://foto2.jpg
    // },
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {},
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.savedMessage = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = false;
      state.savedMessage = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

      state.savedMessage = `${action.payload.title} updated successfully!`;
    },
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
