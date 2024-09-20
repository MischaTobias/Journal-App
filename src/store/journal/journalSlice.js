import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    clearNotesOnLogout: (state) => {
      state.isSaving = false;
      state.savedMessage = "";
      state.notes = [];
      state.activeNote = null;
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.activeNote = null;
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.savedMessage = "";
    },
    setActiveNoteImages: (state, action) => {
      state.activeNote.imageURLs = [
        ...state.activeNote.imageURLs,
        ...action.payload,
      ];
      state.isSaving = false;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
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
  clearNotesOnLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setActiveNoteImages,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
