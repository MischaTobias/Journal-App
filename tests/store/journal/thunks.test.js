import { beforeEach, describe, expect, test, vitest } from "vitest";
import { startNewNote } from "../../../src/store/journal/thunks";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
} from "../../../src/store/journal/journalSlice";
import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../../../src/firebase/config";

describe("journal Thunks tests", () => {
  const dispatch = vitest.fn();
  const getState = vitest.fn();

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  test("startNewNote should create an empty note", async () => {
    const uid = "TestUID";
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    const newNote = {
      body: "",
      date: expect.any(Number),
      id: expect.any(String),
      imageURLs: expect.any(Array),
      title: "",
    };

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(newNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(newNote));

    // Empty firebase
    const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);
  });
});
