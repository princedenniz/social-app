import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300} mt={2} mb={2}>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
      <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS2irfsrEizGOq3FvmJwSVpqMDngOJOAf3dq0ROvAuB6Jq8la_qFgcXqfoCFge27vF1OmoM_HM09j3K1eU" />
      <Avatar alt="Travis Howard" src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTcuNO5PUzdRDJTEr9jl4oCzyRZjZsD-OkhIG-gEfoCtACsNw3h6m4BsDqHEDv2Lq5vsX0pTRHoQYyPZj8" />
      <Avatar alt="Agnes Walker" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQGWFDhynG_9pKVZDvvssfw-Q4R3NEryuCfZfvXQWtZE3JIRzI_nNPVgkehrYU8AP46hj42dROZ5JzaGgw" />
      <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ2RRIqs6MqnQR181DRcWRGxeJql9FVildnyF0uu48OZ7MN62g93ZeNAtwVxS_8djQC7Hgc3aAOJD55kbk" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
    <ImageListItem>
      <img
        src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQGWFDhynG_9pKVZDvvssfw-Q4R3NEryuCfZfvXQWtZE3JIRzI_nNPVgkehrYU8AP46hj42dROZ5JzaGgw"
        alt="img"
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="img"
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Bola_Tinubu_portrait.jpg"
        alt="img"
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src="https://pbs.twimg.com/profile_images/1050783097934020608/2_bhBolN_400x400.jpg"
        alt="img"
        loading="lazy"
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src="https://www.icirnigeria.org/wp-content/uploads/2022/04/04c0c4f6-atiku-abubakar.jpg"
        alt="img"
        loading="lazy"
      />
    </ImageListItem>
    </ImageList>

    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversation</Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?cs=srgb&dl=pexels-orione-concei%C3%A7%C3%A3o-2983464.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
