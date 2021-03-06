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
        // backgroundColor: '#D8D8D8'
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
export default function InforValue( {props}){
    const {saleunit, price, costbefor, compensation, timeexport, nameinsure,
        companyinsure, costafter, times, moneyexist, exportcontract} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* Header */}
            <div className={`${classes.header}`}>
                <Grid container spacing={0} xs={12}>
                    <Grid item xs={12} >
                        <Typography style={{marginLeft:'8px',}}
                            className={`${classes.textHeader}`}>
                            Th??ng Tin Gi?? Tr??? 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            {/* Body */}
            <div className={`${classes.body}`}>
                <Grid container spacing={2} xs={12}>
                    {/* ????n v??? b??n H??ng */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            ????n v??? b??n H??ng
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {saleunit}
                        </Typography>
                    </Grid> 
                    {/* Cty B???o Hi???m */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`}>
                            Cty B???o Hi???m
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {companyinsure}
                        </Typography>
                    </Grid>
                    {/* Gi?? b??n s???n ph???m */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Gi?? b??n s???n ph???m
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {price}
                        </Typography>
                    </Grid>
                    {/* Ph?? b???o hi???m tr?????c thu??? */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`}>
                            Ph?? b???o hi???m tr?????c thu???
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {costbefor}
                        </Typography>
                    </Grid>
                    {/* Ph?? b???o hi???m sau thu??? */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Ph?? b???o hi???m sau thu???
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {costafter}
                        </Typography>
                    </Grid>
                    {/* S??? l???n b???i th?????ng */}
                    <Grid item xs={6} sm={6} 
                        className={`${classes.marginDown} `}>
                        <Typography className={`${classes.textReq}`}>
                            S??? l???n b???i th?????ng
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {times}
                        </Typography>
                    </Grid>
                    {/* S??? ti???n b???i th?????ng */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            S??? ti???n b???i th?????ng
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {compensation}
                        </Typography>
                    </Grid>
                    {/* S??? ti???n b???o hi???m c??n l???i */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            S??? ti???n b???o hi???m c??n l???i
                        </Typography>
                        <Typography className={`${classes.textRes}`} >
                            {moneyexist}
                        </Typography>
                    </Grid>
                    {/* Th???i gian xu???t b??n */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Th???i gian xu???t b??n
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {timeexport}
                        </Typography>
                    </Grid>
                    {/* Ng??y xu???t h???p ?????ng */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            Ng??y xu???t h???p ?????ng
                        </Typography>
                        <Typography className={`${classes.textRes}`} >
                            {exportcontract}
                        </Typography>
                    </Grid>
                    {/* T??n g??i b???o hi???m */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            T??n g??i b???o hi???m
                        </Typography>
                        <Typography className={`${classes.textRes}`} >
                            {nameinsure}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            
        </div>
      );
}