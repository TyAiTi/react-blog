import { container, title } from "assets/jss/material-kit-react.js";
const homeStyle = {      
    sections: {
      padding: "70px 0"
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    textJustify:{
      textAlign:"justify"
    },
    titleHome:{
        paddingRight: "15px",
        //paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%"
    },
    center:{      
      justifyContent:'center',
      '& p':{
        opacity: '.7',
        color:' #000',
        fontFamily: 'sans-serif',
        fontSize: '15px',
        lineHeight: '24px',
        textAlign: 'justify'
      }
    },
    centerText:{
      textAlign:'center',
      color: '#000',
      fontFamily: 'sans-serif',
      fontSize: '21px',
      lineHeight: '52px',
      marginBottom:'15px',
      fontWeight:'bold'
    //   margin: 'auto auto 90px',
    }, 
    headerBold:{
      fontWeight:"bold",
        //textAlign:"center",
        marginBottom:"-5px"
    },
    floatLeftContent:{      
        // float:'left',
        marginBottom: '20px'
    },
    
    imgDiv:{
      paddingLeft:'0px !important',
      paddingRight:'0px !important',
      textAlign:'center',
      justifyContent:'center',
      alignContent:'center'
    },
    contentDiv:{
      paddingLeft:'0px',
      paddingRight:'0px',      
      '& h4' :{
        color: '#000',
        fontFamily: 'sans-serif',
        fontSize: '25px',
        marginTop: '0px',
        marginBottom: '5px',
        fontWeight: 'bold',
        lineHeight: '1.2'
      },
      '& p':{
        opacity: '.7',
        color: '#000',
        fontFamily: 'sans-serif',
        fontSize: '15px',
        lineHeight:'24px',
        fontWeight: '400'
      }
    },
    flexDisplay:{
      display:'flex',
      flexFlow:'row wrap'
    },
    middleImg:{
        paddingTop: '75px',
        paddingBottom: '75px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        position: 'relative',
        '&::before':{
            content: '""',
            backgroundColor: '#000',
            opacity: '.34',
            position: 'absolute',
            top:'0',
            width: '100%',
            height: '100%'
        }
    },
 
    imgMiddleText:{
        textShadow:' 0 2px 4px rgba(0,0,0,.5)',
        color: '#fff',
        fontFamily:'sans-serif',
        textAlign:'justify',
        fontSize: '24px',
        position: 'relative',
        lineHeight: '42px',
        zIndex: '1',
        margin: '0 auto 35px'
    },    
    centerMiddleImage:{      
        justifyContent:'center',
        textAlign:'center'
        // '& button':{
        // }
      },

    storyRow:{
      display:'flex',
    },

    term:{
      '& h4' : {
        marginTop:'10px',
        marginBottom:'0px',
        fontSize:'20px',
        color:'#93c83d'
      },
      '& ol': {
        marginTop:'10px',
        marginBottom:'10px',
      },
      marginBottom:'20px'
    },

    bannerImg:{     
      '&::before':{
          content: '""',
          backgroundColor: '#000',
          opacity: '.34',
          position: 'absolute',
          top:'0',
          width: '100%',
          height: '100%'
      }
    },
    stepBackground:{
        backgroundColor: '#93c83d',
        padding:'20px',
        textAlign:'center',
        justifyContent:'center',
        webkitBorderRadius:'15px',
        borderRadius:'15px',
        marginBottom:'15px'
    },
    stepInfo : {
        backgroundColor:'#fff',
        textAlign:'center',
        justifyContent:'center',
        width:'190px',
        height:'190px',
        margin:'0px auto',
        borderWidth:'7px',
        borderStyle:'double',
        borderColor:'#93c83d',
        zIndex:99
    },
    stepImage: {
        paddingTop:'10px',
        paddingBottom:'0px',
        width:'55px'
    },
    lastStep:{
        marginBottom:'20px'
    }



};

export default homeStyle;