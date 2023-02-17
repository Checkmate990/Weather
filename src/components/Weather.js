import React, { useState, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import logo from "../images/bg.jpg";
import Form from "./Form";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
    component: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${logo})`,
      backgroundColor: "#222c32",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      animation: "slide 20s linear infinite",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    leftContainer: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px 0 0 20px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "30%",
        borderRadius: "20px 20px 0 0",
      },
    },
    rightContainer: {
      height: "67%",
      width: "26%",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "70%",
      },
    },
    chatbot: {
      position: "absolute",
      bottom: "500px",
      left: "-900px",
      height: "67%",
    },
    weatherGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gridGap: "20px",
      padding: "20px",
    },
    weatherCard: {
      background: "#fff",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
    weatherIcon: {
      width: "50px",
      height: "50px",
    },
    weatherTemp: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0",
    },
    weatherDesc: {
      fontSize: "1.2rem",
      margin: "0",
    },
  }));
  
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#0084ff",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#0084ff",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  


function ChatbotComponent({ onCitySubmit }) {
  const [name, setName] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    localStorage.removeItem("city");
  }, []);

  const steps = [
    {
      id: "1",
      message: "Hi, what is your name?",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: "3",
      validator: (value) => {
        if (!value || value.trim() === "") {
          return "Please enter your name.";
        }
        setName(value);
        return true;
      },
    },
    {
      id: "3",
      message: `Hi ${name}! Which city's weather would you like to see?`,
      trigger: "city",
    },
    {
      id: "city",
      user: true,
      trigger: "5",

      validator: (value) => {
        if (!value || value.trim() === "") {
          return "Please enter a city.";
        }
        localStorage.setItem("city", value);
        return true;
      },
    },
    {
      id: "5",
      message: `Fetching weather for ...`,
      end: true,
    },
  ];

  const handleShowChatbot = () => {
    setShowChatbot(true);
  };

  const buttonStyles = {
    width: '150px',
    height: '50px',
    fontSize: '1.2rem',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleShowChatbot} style={buttonStyles}>Show Chatbot</button>
      {showChatbot && <ChatBot steps={steps} hideHeader={true} />}
    </ThemeProvider>
  );
};



  
  

const Weather = () => {
    const classes = useStyles();
    const city = localStorage.getItem("city") || "";
  
    return (
        
        <Box className={`${classes.component} ${classes.patterns}`}>
        <Box className={classes.leftContainer}>
          <h1
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
             
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "1.2rem",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
          </p>
        </Box>
        <Box className={classes.rightContainer}>
          <Form city={city} />
          <div className={classes.chatbot}>
            <ChatbotComponent />
            <Header />
            <Navbar />
          </div>
        </Box>
      </Box>
    );
  };
  
  
  

export default Weather
