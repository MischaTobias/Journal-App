import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";

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

  const fileInputRef = useRef();

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

  const onFileInputChange = ({ target }) => {
    const { files } = target;
    if (files.length === 0) return;

    dispatch(startUploadingFiles(files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid2 container direction="column">
      <Grid2
        alignItems="center"
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} container justifyContent="flex-end">
          <input
            multiple
            onChange={onFileInputChange}
            ref={fileInputRef}
            style={{ display: "none" }}
            type="file"
          />
          <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>
          <Button
            color="primary"
            disabled={isSaving}
            onClick={onSaveNote}
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          fullWidth
          label="Title"
          name="title"
          onChange={onInputChange}
          placeholder="Enter title"
          sx={{ border: "none", mb: 1 }}
          type="text"
          value={title}
          variant="filled"
        />
        <TextField
          fullWidth
          minRows={5}
          multiline
          name="body"
          onChange={onInputChange}
          placeholder="What happened today?"
          type="text"
          value={body}
          variant="filled"
        />
      </Grid2>
      <Grid2 container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Delete
        </Button>
      </Grid2>
      <ImageGallery images={activeNote.imageURLs} />
    </Grid2>
  );
};
