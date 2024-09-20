import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("User UID not found");

  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const response = await getDocs(collectionRef);
  const { docs } = response;

  return docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
