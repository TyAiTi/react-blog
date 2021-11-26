import { CenterFocusStrong } from "@material-ui/icons";
import { primaryColor,dangerColor } from 'assets/jss/material-kit-react.js';
const customStyle = {
    ul:{
      paddingLeft:'0px',
      marginTop:'0px',           
      '& li' :{
        marginLeft: '16px', 
        '& a:hover': {        
          color: '#93c83d',
          textDecoration:'none',
        }, 
        '& a:focus': {        
          color: '#93c83d',
          textDecoration:'none',
        },
        '& a':{             
            color: '#93c83d',
            textDecoration:'none',
        }            
      },
      
    },
    p:{
      margin:'0px',
      '& a':{             
        color: '#93c83d',
        textDecoration:'none',
      },
      '& a:hover': {        
        color: '#93c83d',
        textDecoration:'none',
      }, 
      '& a:focus': {        
        color: '#93c83d',
        textDecoration:'none',
      },
    },

    title:{
      textAlign:'center',
      background:primaryColor,
      color:"white",
      border: '1px solid rgba(0, 0, 0, .125)',
      '& h3':{
        fontSize:'20px',
        fontWeight:'bold'
      }
    },
    titleDanger:{
        textAlign:'center',
        background:primaryColor,
        color:dangerColor,
        border: '1px solid rgba(0, 0, 0, .125)',
        '& h3':{
            fontSize:'20px',
            fontWeight:'bold'
        }
    },
    titleText:{
        margin:"10px 10px"
    },
    detailContent:{
      paddingLeft:'20px;',
      paddingTop:'20px',
    },
    paper:{
        padding: "10px 15px"
    },
    img:{
      textAlign:'center'
    }

};

export default customStyle;