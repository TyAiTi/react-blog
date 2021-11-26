import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon  from '@mui/icons-material/CheckCircleOutline';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,  
    //   height: '226px'
    //   backgroundColor: 'pink'
    },
    marginTop: {
        marginTop: '10px',
    },
    marginDown: {
        marginBottom: '10px',
    },
    header:{
        flexGrow: 1,  
        padding: theme.spacing(2),
        backgroundColor: '#D8D8D8'
    },
    body:{
        flexGrow: 1,
        padding: theme.spacing(2),  
        // backgroundColor: 'gray'
    },
    textHeader:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    texttHeader2:{
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#54DE7E',
        marginLeft:'8px'
    },
    textReq:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F'
    },
    textRes:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'16px',
        color: '#323C4A'
    },
  }));
  const colors = [
    {
        color : "#5D93E1",
    },
    {
        color : "#F9D288",
    },
    {
        color : "#5DC250",
    },
    {
        color : "#F48687",
    },
    {
        color : "#B964F7",
    }
]
export default function NumberContract( {props}){
    const {number, name, phone, email} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* Header */}
            <div className={`${classes.header}`}>
                <Grid container spacing={0} xs={12}>
                    <Grid item xs={3} >
                        <Typography style={{marginLeft:'8px', color:'#8A939F'}}
                            className={`${classes.textHeader}`}>
                            Số Hợp Đồng
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography className={`${classes.textHeader}`}>
                            {number}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <FileCopyIcon color='secondary'/>
                    </Grid>
                    <Grid item xs={3} >
                    <div style={{display:'flex'}}>
                            <CheckCircleOutlineIcon color='secondary'/>
                                <Typography className={`${classes.texttHeader2}`}>
                                    Hiệu lực
                                </Typography>
                            </div>
                    </Grid>
                </Grid>
            </div>
            {/* Body */}
            <div className={`${classes.body}`}>
                <Grid container spacing={2} xs={12}>
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Họ tên
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} 
                        >
                        {/* <Typography className={`${classes.textReq}`}>
                            Email
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {email}
                        </Typography> */}
                    </Grid>
                    <Grid item xs={6} sm={6} 
                        className={`${classes.marginDown} `}>
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Số điện thoại
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} 
                        className={`${classes.marginDown} `}>
                        <Typography className={`${classes.textReq}`}>
                            Email
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {email}
                        </Typography>
                    </Grid>
                    
                </Grid>
            </div>
            
        </div>
      );
}