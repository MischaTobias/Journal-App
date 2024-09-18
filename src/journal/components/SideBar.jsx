import { TurnedInNot } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);

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
        {["January", "February", "March", "June"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNot />
              </ListItemIcon>
              <Grid2 container>
                <ListItemText primary={text} />
                <ListItemText
                  secondary={"Lorem ipsum dolor sit amet consectetur."}
                />
              </Grid2>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
