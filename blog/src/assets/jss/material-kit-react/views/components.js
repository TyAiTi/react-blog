import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },

  textBaner1: {

    fontWeight: "600",
    display: "block",
    position: "relative",
    fontSize: '30px',
    textShadow:"0 2px 4px rgba(0,0,0,.5)",
    "@media (min-width: 50px)": {
      fontSize:"25px"

    },
    "@media (min-width: 368px)": {
      fontSize:"30px"

    },
    "@media (min-width: 950px)": {
      fontSize:"30px"
    },
    "@media (min-width: 1150px)": {
      fontSize:"30px"
    },


  },
  textBaner2: {
    maxWidth: "500px",
    margin: "10px 0 0",
    textShadow:"0 2px 4px rgba(0,0,0,.5)",
    "@media (min-width: 50px)": {
      margin: "20px 0 0",
      fontSize:"18px"
    },
    "@media (min-width: 368px)": {
      margin: "20px 0 0",
      fontSize:"20px"
    },
    "@media (min-width: 950px)": {
      fontSize:"20px",
      margin: "20px 0 0",

    },
    "@media (min-width: 1150px)": {
      fontSize:"20px",
      margin: "10px 0 0",

    },

  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 0px 0px",
    //borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  main1: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised1: {
    margin: "78px 0px 0px",
    //borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
