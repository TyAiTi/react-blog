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
                    <Grid item xs={3} >
                        <Typography style={{marginLeft:'8px',}}
                            className={`${classes.textHeader}`}>
                            Thông Tin Giá Trị 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            {/* Body */}
            <div className={`${classes.body}`}>
                <Grid container spacing={2} xs={12}>
                    {/* Đơn vị bán Hàng */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Đơn vị bán Hàng
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {saleunit}
                        </Typography>
                    </Grid> 
                    {/* Cty Bảo Hiểm */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`}>
                            Cty Bảo Hiểm
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {companyinsure}
                        </Typography>
                    </Grid>
                    {/* Giá bán sản phẩm */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Giá bán sản phẩm
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {price}
                        </Typography>
                    </Grid>
                    {/* Phí bảo hiểm trước thuế */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`}>
                            Phí bảo hiểm trước thuế
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {costbefor}
                        </Typography>
                    </Grid>
                    {/* Phí bảo hiểm sau thuế */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Phí bảo hiểm sau thuế
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {costafter}
                        </Typography>
                    </Grid>
                    {/* Số lần bồi thường */}
                    <Grid item xs={6} sm={6} 
                        className={`${classes.marginDown} `}>
                        <Typography className={`${classes.textReq}`}>
                            Số lần bồi thường
                        </Typography>
                        <Typography className={`${classes.textRes}`}>
                            {times}
                        </Typography>
                    </Grid>
                    {/* Số tiền bồi thường */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Số tiền bồi thường
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {compensation}
                        </Typography>
                    </Grid>
                    {/* Số tiền bảo hiểm còn lại */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            Số tiền bảo hiểm còn lại
                        </Typography>
                        <Typography className={`${classes.textRes}`} >
                            {moneyexist}
                        </Typography>
                    </Grid>
                    {/* Thời gian xuất bán */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} style={{marginLeft:'8px'}}>
                            Thời gian xuất bán
                        </Typography>
                        <Typography className={`${classes.textRes}`} style={{marginLeft:'8px'}}>
                            {timeexport}
                        </Typography>
                    </Grid>
                    {/* Ngày xuất hợp đồng */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            Ngày xuất hợp đồng
                        </Typography>
                        <Typography className={`${classes.textRes}`} >
                            {exportcontract}
                        </Typography>
                    </Grid>
                    {/* Tên gói bảo hiểm */}
                    <Grid item xs={6} sm={6} 
                        >
                        <Typography className={`${classes.textReq}`} >
                            Tên gói bảo hiểm
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