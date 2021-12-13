import { Box, Container, Grid, Typography ,Button} from '@material-ui/core'
import React from 'react'
import { RenderSectionHeading } from '../Common/CommonComponent'
import { useStyle } from './BodyStyles'
import image1 from "../../images/5-2.jpg";
import image2 from "../../images/5-3.jpg";
import image3 from "../../images/5-4.jpg";
import image4 from "../../images/5-6.jpg";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Portfolio() {
    const classes= useStyle()
    const portfolioData=[
        {url:image1,title:"# portfolio1",link:""},
        {url:image2,title:"# portfolio",link:""},
        {url:image3,title:"# portfolio",link:""},
        {url:image4,title:"# portfolio",link:""},
        {url:image5,title:"# portfolio",link:""},
    {url:image6,title:"# portfolio",link:""},
    ]
    return (
        <Box className={classes.sectionDark} id="Portfolio">
             <Grid
              container 
              style={{
                  display:"flex",
                  justifyContent:"center",
                  alignContent:"center",
                  }}>
            <Grid item xs={12} sm={8}>
                {RenderSectionHeading({
                    smallText: "Portfolio",
                    heading:"Let's See My Work",
                    alignCenter: true,
                })}
            </Grid>
        </Grid>
        {/*image section */}
        <ScrollAnimation animateIn='fadeIn'>
        <container maxWidth="xl">
        <Grid container spacing={2}>
            {portfolioData.map((item,i)=>(     
            <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                    <img
                     src={item.url}
                     alt={item.title} 
                     className={classes.responsiveImg} />
                     <Box className={classes.imageOverlay}>
                         <Typography className={classes.overlayTitle}>{item.title}</Typography>
                         <Button variant='contained'>Visit</Button>
                     </Box>
                </Box>
            </Grid>
    ))}
        </Grid>
        </container>
        </ScrollAnimation>
        </Box>
       
    )
}

 