import {
  AccountBox,
  Group,
  Home,
  Inbox,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = ({setMode, mode}) => {
  return (
    <Box
      
      p={2}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">

      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light") }/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
