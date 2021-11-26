import { container, primaryColor } from "assets/jss/material-kit-react.js";
import {defaultFont, grayColor} from "../../material-dashboard-react";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid " + grayColor[11],
    padding: "15px 0px 0px",
    /****edit */
    fontSize:'15px',
    color: '#000',
    height:'auto',

    /****end */

  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  gridContainer:{

    grid:{
      /****edit class*/
      height:'auto',

    }
  },
  center:{
    justifyContent:'center',
  },
  navLink:{
    textTransform:'none',
    padding: '0px',
    fontWeight:'100',
    fontSize:'12px',
    fontFamily: 'Roboto-Regular,sans-serif'
  },
  h3:{
    fontSize:'18px',
    fontFamily: 'Roboto-Regular,sans-serif'
  },
  contactLink:{
    color: '#93c83d',
    fontFamily: 'Roboto-Black,sans-serif',
    fontSize: '14px',
    letterSpacing: '.34px',
    //display: '-webkit-box',
    display: 'flex',
    // -webkit-box-align: 'start',
    alignItems: 'start',
    textAlign: 'left',
    borderRadius: '4px',
    border: '1px solid #e6e6e6',
    backgroundColor: '#fff',
    padding: '17px',
    marginBottom: '17px'
  },
};
export default footerStyle;
