import React from "react";

import {Box, makeStyles} from '@material-ui/core'
import logo from '../images/bg.jpg'
import Form from './Form';

const useStyles = makeStyles({
    component:{
        height :'100vh',
        display:'flex',
        alignItems : 'center',
        width : '%',
        margin : '0 auto',

        
    },
    leftContainer :{

        backgroundImage: `url(${logo})`,
        height : '0%',
        width : '0%',
        backgroundSize : 'cover',
        borderRadius : '20px 0px 0px 20px'
        

    },
    rightContainer:{
        backgroundImage: `url(${logo})`,
        height:'60%',
        width : '100%'
    }
})

const Weather = () =>{
    const clases = useStyles();
    return(
        <Box className={clases.component}>
            <Box className={clases.leftContainer}>

            </Box>
            <Box className = {clases.rightContainer}>
                <Form></Form>
            </Box>
            
        </Box>
    )
}

export default Weather;