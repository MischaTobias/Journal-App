import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, savedMessage, isSaving } = useSelector(
    (state) => state.journal
  );
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (savedMessage) {
      Swal.fire("Saved!", savedMessage, "success");
    }
  }, [savedMessage]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <Grid2 container direction="column">
      <Grid2
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid2>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid2>
        <Grid2>
          <Button
            color="primary"
            sx={{ padding: 2 }}
            onClick={onSaveNote}
            disabled={isSaving}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>
      <ImageGallery />
    </Grid2>
  );
};
