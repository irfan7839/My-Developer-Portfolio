import React from 'react';
import {Box , Grid,Hidden} from '@material-ui/core';
import {useStyle} from './BodyStyles';
import image from "../../images/About.jpg";
import { CardMedia, RenderSectionHeading } from '../Common/CommonComponent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PermDeviceInformationRoundedIcon from '@material-ui/icons/PermDeviceInformationRounded';
import ToysRoundedIcon from '@material-ui/icons/ToysRounded';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutUs() {
    const classes= useStyle();
    const cardMediaData=[
      {title:"Web Development", description:"lorem ipsum dolor sit amet consectetur adipisicing elit.", icon:<DashboardRoundedIcon/> },
      {title:"Graphic Design", description:"lorem ipsum dolor sit amet consectetur adipisicing elit.", icon:<ToysRoundedIcon/> },
      {title:"Marketing", description:"lorem ipsum dolor sit amet consectetur adipisicing elit.", icon:<AcUnitIcon/> },
      {title:"Mobile App", description:"lorem ipsum dolor sit amet consectetur adipisicing elit.", icon:<PermDeviceInformationRoundedIcon/> },
      
    ]
    return (
      <Box className={classes.section} id='About'>
        <ScrollAnimation animateIn='fadeIn'>
        <container>
      <Grid container>
        <Grid item sm={5}>
          <Box component={Hidden} xsDown>
          <img src={image} alt="about us" className={classes.responsiveImg}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          {RenderSectionHeading({
            smallText:"ABOUT ME" ,
           heading:"hello I'm Md Irfan",
            description:"A MERN Stack Developer,who can make responsive websites",
            })}
            <br/>
          {/*  {CardMedia({label:"lebel1",
            Desc:"Desc1",
            Icon:<AcUnitIcon/>
            })}
          */}
          <Grid container>
            
            {cardMediaData.map((item,i)=>(<Grid item xs={12} sm={6} key={i}>{CardMedia({label:item.title,
            Desc:item.description,
            Icon:item.icon,
           
            })}
            </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </container>
      </ScrollAnimation>
      </Box>
    )
}

 
