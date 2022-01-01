import {Grid, Typography} from '@material-ui/core'
import React from 'react'
// import Chart from "react-apexcharts";

import { makeStyles } from '@material-ui/core/styles';

import WarningIcon from '@material-ui/icons/Warning';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ReportIcon from '@material-ui/icons/Report';

//link video1
const linkvideo1 = 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'
const pol_url_certificate = "https://www.pvionline.com.vn/filedownload/GCNDT_API_TEST_1/2021/12/15/MOBICARE/MOBICARE_MMPVI000411_c3e804d46bfb46459ab546d2efeb1d16.pdf"
const useStyles = makeStyles( ()=>({
    root:{
        padding: '4%',
        width: '50%'
    },
    content:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
    },
    top:{
        backgroundColor:'#A6A6A6',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
        height: '300px'
    },
    squares:{
        backgroundColor:'#4E5B6C',
        borderRadius: '10px',
        boxShadow: '0 0 5px 0 #616161',
        height: '200px',
        width:'200px'
    },
    squareTop:{
        height:'80%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px', 
        boxShadow: '0 0 5px 0 #616161',
    },
    textNumber:{
        fontSize:'78px',
        color:'white'
    },
    textNoti:{
        fontFamily:'Roboto',
        fontSize:'14px',
        color:'#FFFFFF',
        marginLeft:'8px'
    }
}))

export default function ChartSquares(){
    const classes = useStyles()
    const timer = 2
    const today = 3
    const nextday = 48
    return(
        <div className={classes.root}>
            {/* <video width="750" height="500" controls >
                <source src={linkvideo1} type="video/mp4"/>
            </video> */}
            <div className={classes.top}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                >
                    <Grid>
                        <Typography className={classes.content}>
                            Tình Hình
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={classes.content}>
                            Bộ lọc
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={classes.content}>
                            Icon
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={classes.content}>
                            Tất Cả Trạng Thái
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={classes.content}>
                            Hướng Xử Lý
                        </Typography>
                    </Grid>
                </Grid>
                
            </div>
            <div className={classes.top} style={{marginTop:'5px',}}>
                <Grid container style={{padding:'24px'}}>
                    <Grid item xs={12} md ={4} >
                        <Grid container item xs className={classes.squares}>
                            <Grid   item container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center" 
                                    xs={12} 
                                    className={classes.squareTop} 
                                    style={{backgroundColor:'#FF4E4E'}}>
                                <Typography className={classes.textNumber}>2</Typography>
                            </Grid>
                            <Grid container  
                                 direction="row"
                                 justifyContent="center"
                                 alignItems="center"
                                 item xs={12}>
                                <ReportIcon/>
                                <Typography className={classes.textNoti}> Quá hạn</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md ={4} >
                        <Grid container item xs className={classes.squares}>
                            <Grid item container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center" 
                                    xs={12} 
                                    className={classes.squareTop}
                                     style={{backgroundColor:'#FF9400'}}>
                                <Typography className={classes.textNumber}>3</Typography>
                            </Grid>
                            <Grid container 
                                 direction="row"
                                 justifyContent="center"
                                 alignItems="center"
                                 item xs={12} > 
                            
                                <WarningIcon  /> 
                                <Typography className={classes.textNoti}> Phải làm hôm nay</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md ={4} >
                        <Grid container item xs className={classes.squares}>
                            <Grid item container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center" 
                                    xs={12} 
                                    className={classes.squareTop}
                                     style={{backgroundColor:'#54DE7E'}}>
                                <Typography className={classes.textNumber}>48</Typography>
                            </Grid>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                item xs={12} > 
                                <QueryBuilderIcon/> 
                                <Typography className={classes.textNoti}> Chưa tới hạn</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}