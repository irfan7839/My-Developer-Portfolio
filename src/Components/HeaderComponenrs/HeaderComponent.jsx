import { Box, Drawer, makeStyles, Typography } from '@material-ui/core'
import React , {useState} from 'react'
import { useStyles } from './HeaderStyles'
import Navbar from './Navbar'
import {Decorator} from '../Common/CommonComponent';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import DrawerComponent from './DrawerComponent';
import Typed from 'react-typed';




export default function HeaderComponent() {
    const classes = useStyles();
    const [initialState,setInitialState]= useState(false);
    const handleDrawerToogler=()=>{
        setInitialState(!initialState);
    };
    const navlinks=[
        {label:"About",Id:"About"},
        {label:"Portfolio",Id:"Portfolio"},
        {label:"Contact",Id:"Contact"},

    ];
    return (
    <Box className={classes.root} id="Header">
        <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>
        <DrawerComponent
        initialState={initialState}
         navlinks={navlinks} 
        handleDrawerToogler={handleDrawerToogler}
        />
       
        <Box className={classes.HeaderContainer}>
            <Typography variant='h3' component="h4" className={classes.headerTitle}>
                I'm a <span style={{paddingRight:"5px"}}></span>
                <Typed
                strings={[
                    "Webdeveloper,",
                    "UI/UX Designer,",
                    "Digital Expert,",
                ]}
                typeSpeed={30}
                backSpeed={50}
                loop 
                />
                </Typography>
            <Typography variant='h3' component="h4" className={classes.headerDesc}>
                I Create Website And Application,
                <br/>
                 Based On Your Needs... 
                </Typography>

              {Decorator({
                  label:"About us",
                  withIcon:true,
                  Icon:<ArrowDownwardRoundedIcon/>,
                  })}
    </Box>
    </Box>
    )
}


