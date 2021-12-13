import { Box, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './BodyStyles'
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import Link from 'react-scroll/modules/components/Link';

export default function Footer() {
    const classes=useStyle();
    var date=new Date()
    return (
        <Box className={classes.footerContainer} id="Footer">
            <IconButton className={classes.iconButton}
             activeClass="active" 
             to="Header"
             spy={true} 
             smooth={true} 
             offset={-70} 
             duration={1200}
             component={Link}
             >
                <ArrowUpwardRoundedIcon/>
            </IconButton>
            <Typography
             variant="body1" 
             component="h4" 
             align="center" 
             color="inherit">
                 Developed and designed by Md Irfan , All Right Reserved © {date.getFullYear()}
             </Typography>
        </Box>
    )
}


