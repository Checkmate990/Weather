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
    const [city , setCity] = useState("");
    const [country , setCountry] = useState("");
    const [click,handleClick] = useState(false);
    

    useEffect(()=>{
        
        const getWeather = async() =>{
            city &&     await getData(city,country).then(response =>{
                getWeatherData(response.data)
                console.log(response.data)
            })
        }

        getWeather();
        handleClick(false);
    },[click]);

    const handleCityChange =(value)=>{
        setCity(value);
    }
    const handleCountryChange =(value)=>{
        setCountry(value);
    }
    
    return(
        <React.Fragment>
            <Box className = {classes.component}>
                <TextField inputProps = {{className:classes.input}}
                       onChange = {(e) => handleCityChange(e.target.value)}
                       className = {classes.input} 
                       label = "city" />
                <TextField inputProps = {{className:classes.input}}
                        onChange = {(e) => handleCountryChange(e.target.value)}
                       className = {classes.input} 
                       label = "country" />
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