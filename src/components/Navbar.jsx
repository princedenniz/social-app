import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Icon,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Mail, Notifications, PetsRounded } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] :{
    display: "flex",
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] :{
    display: "none",
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <PetsRounded sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30, height:30}} src="https://thegrio.com/wp-content/uploads/2018/07/Jare-2.jpg" onClick={(e)=> setOpen(true)}/>
        </Icons>
          <UserBox>
          <Avatar sx={{width:30, height:30}} src="https://thegrio.com/wp-content/uploads/2018/07/Jare-2.jpg" onClick={(e)=> setOpen(true)}/>
          <Typography variant="span">Dennis</Typography>

          </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
