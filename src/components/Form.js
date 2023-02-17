import React from "react";
import { Box, Button, TextField , makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {getData} from "../service/api"
import Information from "./Information"

const useStyles = makeStyles({
    input:{
        color : '#fff' , 
        marginRight : 15 , 

    } , 
    component :{
        padding : 10 , 
        background : '#445a6f'
    },
    button :{
        width : 150,
        height : 40,
        background : '#e67e22',
        color : '#fff',
        marginTop :5
    }
})

const Form = () =>{
    const classes = useStyles();
    const [data , getWeatherData ] = useState();
    const [click,handleClick] = useState(false);
    
    useEffect(()=>{
        
        const getWeather = async() =>{
            const city = localStorage.getItem("city") || "";
            city && await getData(city).then(response =>{
                getWeatherData(response.data)
                console.log(response.data)
            })
        }

        getWeather();
        handleClick(false);
    },[click]);

    return(
        <React.Fragment>
            <Box className = {classes.component}>
                <TextField inputProps = {{className:classes.input}}
                       disabled
                       className = {classes.input} 
                       label = {`City: ${localStorage.getItem("city") || ""}`} />
                <Button 
                onClick = {() => handleClick(true)}
                className = {classes.button} 
                variant = "contained" 
                >Get Weather</Button>
            </Box>

            <Information data = {data}>

            </Information>
        </React.Fragment>
        
    )
}
export default Form;
