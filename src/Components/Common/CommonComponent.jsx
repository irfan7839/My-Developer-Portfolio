import {Box,Grid,Typography,Avatar} from "@material-ui/core";
import {useStyles} from "../HeaderComponenrs/HeaderStyles";
import { useStyle } from "../BodyComponents/BodyStyles";


export const Decorator =({label,withIcon,Icon,styles})=>{
    const classes = useStyles()
    return  ( <Box className={classes.decorator} style={styles}>
                    <Typography component="span" className={classes.decoratorText}>
                        {label}
                    </Typography>
                      {withIcon ? (
                    <Typography component="span" className={classes.arrow}>
                      {Icon}
                    </Typography>
                      ):null}
                </Box>
    );
};
export const Divider =({style})=>{
    const classes=useStyle()
    return <Typography component="span" className={classes.divider} style={style}></Typography>
}

export const RenderSectionHeading=({smallText,heading,description,alignCenter})=>{
    const classes=useStyle();
    //decorator
    //heading
    //line
    // description
    return(
    <Box className={classes.sectionHeadingCont}>
   { Decorator({label:smallText,
   withIcon:false,
   styles:alignCenter ? {width:"100px", margin:"10px auto",}:{},
    })}
    <Typography variant="h4" align={alignCenter ? "center" : "left"} className={classes.sectionHeading}>{heading}</Typography>
    {Divider({style:alignCenter ? {margin:"16px auto"}:{margin:"16px 0px"}})}
    <Typography variant="body1" component="h6" className={classes.sectionDesc}>{description}</Typography>
    </Box>
    );
}

export const CardMedia=({label,Desc,Icon,key})=>{
  const classes=useStyle();
  return (
  <Grid container style={{marginTop:"10px"}}>
    <Grid item xs={3} className={classes.AvatarCont}>
    <Avatar className={classes.Avatar}>{Icon}</Avatar>
    </Grid>
    <Grid item xs={9} className={classes.MediaText}>
      <Typography variant='body1' component='h6' >{label}</Typography>
      <Typography variant='caption' >{Desc}</Typography>
    </Grid>
  </Grid>
  )
}