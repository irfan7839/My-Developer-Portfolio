import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { useStyles } from './HeaderStyles'

function DrawerComponent({initialState,navlinks,handleDrawerToogler} ) {
    const classes=useStyles();
    return (
        <Drawer
        anchor="left" 
        open={initialState}
        onClose={handleDrawerToogler}
        className={classes.drawer}>
            <Box className={classes.drawerContainer}>
            <List style={{paddingTop:"30px"}}>
                {navlinks.map((item,i)=>(
                <ListItem key={i} className={classes.listItem}>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>
    )
}

export default DrawerComponent
