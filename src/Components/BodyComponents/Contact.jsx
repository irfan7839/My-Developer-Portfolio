import React,{useState} from 'react';
import {Box , Button, Grid,Hidden, TextField} from '@material-ui/core';
import {useStyle} from './BodyStyles';
import image from "../../images/contactus.jpg";
import {RenderSectionHeading } from '../Common/CommonComponent';
import { RenderInputText } from '../Common/FormComponent';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact() {
    const classes= useStyle();
    const [state, setState] = useState({
           data:{
            firstname:"",
            email:"",
            messages:""
           },
           errors:{

           }
        
    });
    const handleChange=({target})=>{
        const {data,errors}=state;
        //setting errors
        target.value.length<=3
         ? errors[target.name] =`${target.name} at least have 3 letters `
          : errors[target.name] ="";
        data[target.name]=target.value
        setState({data:data ,errors:errors})
        
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submitted,", state.data);
        //api call to post data
    }

    return (
      <Box className={classes.section} id='Contact'>
        <ScrollAnimation animateIn='fadeIn'>
        <container maxwidth='xl'>
      <Grid container>
        <Grid item sm={5}>
          <Box component={Hidden} xsDown>
          <img src={image} alt="contact " className={classes.responsiveImg}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          {RenderSectionHeading({
            smallText:"CONTACT ME" ,
           heading:"Seems To Be Intrested",
            description:"Got my portfolio seen, than feel free to contact me for your future project",
            })}
            <br/>
            <form onSubmit={handleSubmit}>
          <Grid 
          container
           direction="row"
           justifyContent="center"
           alignItems="center" >
              <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                  {RenderInputText({label:"First Name" ,name:"firstname", state:state,onChange:handleChange})}
              </Grid>
              <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                  {RenderInputText({label:"Email",name:"email", state:state,onChange:handleChange})}
              </Grid>
              <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                  {RenderInputText({label:"Messages",name:"messages",state:state,onChange:handleChange,multiline:true,rows:5,})}
              </Grid>
              <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                 <Button variant="outlined" type="submit" fullWidth={true} className={classes.submitBtn}>
                     Submit
                     </Button>
              </Grid>
          </Grid>
          </form>   
          
        </Grid>
      </Grid>
      </container>
      </ScrollAnimation>
      </Box>
    )
}

 
