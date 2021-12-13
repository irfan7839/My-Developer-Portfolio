import {  makeStyles } from '@material-ui/core';
import React from 'react';
import { Theme } from './Themes';
import Image from "../../images/brandBanner.jpg"

export const useStyles= makeStyles((theme)=>({
    root:{
        width:"100%",
        minHeight:"90vh",
        height:"auto",
       // backgroundColor:Theme.colors.base1,
       background:`linear-gradient(to bottom right, #04303140 , #00606473),url(${Image})`,
       backgroundSize:"cover",
       backgroundRepeat:"no-repeat"


    },

    HeaderContainer:{
        width:"85%",
        minHeight:"90vh",
        height:"auto",
        padding:"20px",
        color:Theme.colors.base2,
        display:"flex",
        flexFlow:"column wrap",
        justifyContent:"center",
    },

    headerTitle:{
        fontSize:"3rem",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
          },
   
    },

    headerDesc:{
        fontSize:"2rem",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down('xs')]: {
            fontSize:"1.5rem",
            margin:theme.spacing(2,0),
          },
        
    },
    
    navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2
    },
    ToolBar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between",
    },
    navlinks:{
        color:Theme.colors.base2,
    },
    // decorator
    decorator:{
        display:"flex",
        fontWeight:"bolder",
        fontFamily:"roboto",
        position:"relative",
        marginTop:"20px",
        "&:before":{
            width:"40px",
            height:"40px",
            backgroundColor:Theme.colors.primary,
            content:'""',
            borderRadius:"50%",
        },
    },
    decoratorText:{
        lineHeight:"40px",
        position:"absolute",
        left:"20px",
    },
    arrow:{
        lineHeight:"50px",
       
        position:"absolute",
        left:"95px",
        animationName:"upDown",
        animationDuration:"0.7s",
        animationIterationCount:"infinite",
    },

    // Creating  the animations
    "@global":{
        "@keyFrames upDown":{
            "0%":{
                transform:"scale(1,1)",
                paddingTop:"0px",
                
            },
            "100%":{

                transform:"scale(1,2)",
                paddingTop:"10px",
            
        },
        },
    
        },

        // drawer style
        drawer:{
            width:'250px',
            height:'100vh',

        },
        drawerContainer:{
            width:'250px',
            height:'100vh',
            backgroundColor:Theme.colors.primary1,
        },
        listItem:{
            color:Theme.colors.base2
        }
    

}))
