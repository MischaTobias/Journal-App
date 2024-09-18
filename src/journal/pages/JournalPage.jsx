import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, PostView } from "../views";
import { useDispatch } from "react-redux";
import { startNewPost } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onAddNewPost = () => {
    dispatch(startNewPost());
  };

  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <PostView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.8 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        onClick={onAddNewPost}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
