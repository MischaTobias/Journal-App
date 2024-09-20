import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setActiveNoteImages,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNotes, uploadFile } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("User UID not found");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    if (!uid) throw new Error("User UID not found");

    const { activeNote } = getState().journal;

    const updatedNote = { ...activeNote };
    delete updatedNote.id;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc(docRef, updatedNote, { merge: true });

    updatedNote.id = docRef.id;

    dispatch(updateNote(updatedNote));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(uploadFile(file));
    }

    const photosURLs = await Promise.all(fileUploadPromises);
    dispatch(setActiveNoteImages(photosURLs));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    if (!uid) throw new Error("User UID not found");

    const { activeNote } = getState().journal;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(activeNote.id));
  };
};
