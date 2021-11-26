import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,  
        // backgroundColor:'pink',
        padding: theme.spacing(3),
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    textHeader:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold'
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
export default function Duration( {props}){
    const {datestart, dateend, availability} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* spacing khoảng trống 2*8px */}
          <Grid container spacing={0} xs={12}>
            <Grid item xs={12} >
                <Typography className={`${classes.textHeader}`}>
                    Thời hạn
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ngày hiệu lực
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    {datestart}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ngày hết hạn
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    {dateend}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Số ngày hiệu lực còn lại
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    {availability}
                </Typography>
            </Grid>
            
          </Grid>
        </div>
      );
}