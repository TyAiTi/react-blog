import {
  defaultFont,
  container,
  primaryColor,
  grayColor
} from "assets/jss/material-dashboard-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block",
    
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid " + grayColor[11],
    padding: "15px 0",
  /****edit */
    fontSize:'15px',
    color: '#000',
    height:'auto',
    
  /****end */
    ...defaultFont
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
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
    fontSize:'15px',
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
  copyRight:{
    color: '#000',
    fontWeight:'bold',
    fontFamily: 'Roboto-Regular,sans-serif',
    fontSize: '13px',
    justifyContent:'center',
    textAlign:'center'
  }

};


export default footerStyle;
