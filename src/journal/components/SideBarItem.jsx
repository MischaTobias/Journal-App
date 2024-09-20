import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ id, title, body, date, imageURLs = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + "..." : title;
  }, [title]);

  const onNoteSelection = () => {
    dispatch(setActiveNote({ id, title, body, date, imageURLs }));
  };

  return (
    <ListItem onClick={onNoteSelection} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 container direction="column">
          <ListItemText primary={newTitle} sx={{ mb: 0 }} />
          <ListItemText secondary={body} sx={{ mt: 0 }} />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
