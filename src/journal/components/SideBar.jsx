import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Drawer
      sx={{
        display: { xs: "none", sm: "block" },
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          {displayName}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {notes.map((note) => (
          <SideBarItem key={note.id} {...note} />
        ))}
      </List>
    </Drawer>
  );
};
