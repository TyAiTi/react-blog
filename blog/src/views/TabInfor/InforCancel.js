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
export default function InforCancel( {props}){
    
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* spacing khoảng trống 2*8px */}
          <Grid container spacing={0} xs={12}>
            <Grid item xs={12} >
                <Typography className={`${classes.textHeader}`}>
                    Thông tin hủy
                </Typography>
            </Grid>

            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Người hủy
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ngày nhập trả sản phẩm
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Mã nhân viên trả
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Tên nhân viên trả
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Phí bảo hiểm hoàn trả trước thuế 
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                Phí bảo hiểm hoàn trả sau thuế 
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>

            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ngày hủy họp đồng
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={8} sm={8} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ngày hiệu lực hủy
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className={`${classes.margin}`}>
                <Typography className={`${classes.textReq}`}>
                    Ghi chú hủy
                </Typography>
                <Typography className={`${classes.textRes}`}>
                    -
                </Typography>
            </Grid>
            
          </Grid>
        </div>
      );
}