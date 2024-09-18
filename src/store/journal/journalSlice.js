import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    savedMessage: "",
    notes: [],
    active: null,
    // active: {
    //   id: "123",
    //   title: "",
    //   body: "",
    //   date: 123456789,
    //   imageURls: [], // https://foto1.jpg, https://foto2.jpg
    // },
  },
  reducers: {
    addNewEmptyPost: (state, action) => {},
    setActivePost: (state, action) => {},
    setPosts: (state, action) => {},
    setSaving: (state) => {},
    updatePost: (state, action) => {},
    deletePostById: (state, action) => {},
  },
});

export const {
  addNewEmptyPost,
  setActivePost,
  setPosts,
  setSaving,
  updatePost,
  deletePostById,
} = journalSlice.actions;
