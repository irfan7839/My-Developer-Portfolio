import * as React from 'react';
import { AppBar,Box,Button,IconButton,Toolbar,Typography } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import { Hidden } from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import Link from 'react-scroll/modules/components/Link';


export default function Navbar({navlinks, handleDrawerToogler}) {
    const classes=useStyles()

   
  return (

      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.ToolBar}> 
          <Typography variant="h5" component="h6" >
            {"<GreatCoders/>"}
          </Typography> 
          <Box component={Hidden} xsDown>
              <Box>
          {navlinks.map((item,i)=>(
          <Button key={i} className={classes.navlinks}
          activeClass="active" 
          to={`${item.Id}`}
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          color="inherit"
          component={Link}
          >{item.label}</Button>
          ))}
          </Box>
          </Box>
          <Box component={Hidden} smUp>
              <IconButton color='inherit' onClick={handleDrawerToogler}><MenuOpenRoundedIcon/></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
   
  );
}
