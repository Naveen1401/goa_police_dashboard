import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
const SideDrawer = ()=> {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const link_style = {
      textDecoration : "none",
      color: "#002f5d"
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
   
  const linkList = ["/challan","/complaint","/sharemytrip","/vacation"]
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1 style={{
          paddingLeft: "14px", color: "#FF6F00"}} >Goa safe </h1>
      </List>
      <List>
        {['Challan', 'Complaint', 'Share My trip', 'Going on a vacation'].map((text, index) => (
              <Link className='drawer-link' to={linkList[index]} style={link_style}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
              </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Create Account'].map((text, index) => (
          <Link className='drawer-link' to="/createaccount" style={link_style}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <AddIcon/><ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
          
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color:"white"}} onClick={toggleDrawer(anchor, true)}><MenuIcon/>Menu</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideDrawer