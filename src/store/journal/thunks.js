import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";

export const startNewPost = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newPost = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newPost);
  };
};
