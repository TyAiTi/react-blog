
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon  from '@mui/icons-material/CheckCircleOutline';

import { useState, useEffect } from 'react';
import {props} from './template2'
import moment from "moment";

import Videos from './Videos';
import ReactPlayer from 'react-player'

//Button
import Button from '@material-ui/core/Button';
const link1= 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'
const link2= 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&size=large&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'
const src_img = "http://localhost/code/baohiem/check/iphone.jpg"
const a1 = "http://localhost/code/baohiem/check/1.jpg"
const a2 = "http://localhost/code/baohiem/check/2.jpg"
const a3 = "http://localhost/code/baohiem/check/3.jpg"
const a4 = "http://localhost/code/baohiem/check/4.jpg"
const useStyles2 = makeStyles( (theme)=>({
    root: {
      flexGrow: 1,
      backgroundColor:'#E5E5E5',
      padding:'6%'
    },
    container:{
        paddingTop: '16px',
        paddingBottom:'16px'
    },
    left:{
        // backgroundColor:'gray',
    },
    right:{
        // backgroundColor:'yellow',
        paddingLeft:'16px'
    },
    tabletop:{
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
    },
    tablecenter:{
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
        marginTop:'20px'
    },
    tabledown:{
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: '0 0 3px 0 #616161',
        marginTop:'20px'
    },
    frameHeader:{
        marginTop: '13px',
    },
    framecontent:{
        marginTop: '8px',
        // backgroundColor:'pink',
        // paddingBottom: '8px',
        // paddingTop:'8px'
    },
    textHeader:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
        marginLeft:'16px'
    },
    textReq:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F',
        marginLeft:'16px'
    },
    textRes:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'16px',
        color: '#323C4A',
        marginLeft:'16px'
    },
    textReqNon:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F',
    },
    textResNon:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'16px',
        color: '#323C4A',
    },
    imgOCR:{
        height: '61px',
        width: '52px',
    },
    imgAI:{
        height: '61px',
        width: '61px',
    },
    textDate:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#54DE7E',
        margin: '0px 20px 0px 0px',
    },
    progress: {
        backgroundColor: '#d8d8d8',
        borderRadius: '20px',
        position: 'relative',
        /* margin: 15px 0; */
        height: '7px',
        width: 'auto',
        margin: '0px 20px 0px 16px'
    },
    progress_done : {
        backgroundColor: '#54DE7E',
        height: '100%',
        width: '95%',
    },
    imgtop:{
        margin: '0px 0px 16px 0px'
    },
    imgleft:{
        margin: '13px 0px 0px 16px'
    },
    imgright:{
        margin: '13px 0px 0px 0px'
    },
    imageocr:{
        margin:'13px 13px 13px 0px',
        height: '61px',
        width: '52px',
    },
    imgVideo:{
        margin:'13px 13px 13px 0px',
    },
    frameVideo:{
        marginTop: '8px',
        marginLeft:'16px'
    },
    textVideo:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F',
        // marginLeft:'16px'
    },
  }))
const image = "http://dev.digiin.vn/"
const domain = "http://dev.digiin.vn/"
const verify_default = {
    gdmh: "Kh??ng",
    kqai: null,
    tlcx: null,
    tgyc: null,
    tgkq: null
}


export default function GridBasic2(){
    
    const classes2 = useStyles2()
    let data = props.data
    const [dataPolicy, setDataPolicy] = useState({}) 

    //verify_ai
    let verify_ai = verify_default
    if(data.verify_ai[0]){
        verify_ai = {
            gdmh: "C??",
            kqai: "Kh??ng v???",
            tlcx: data.verify_ai[0].wfl_ai_scoring,
            tgyc: data.verify_ai[0].created_at,
            tgkq: data.verify_ai[0].updated_at,
        }
    }
    if( !data.verify_ai[0] && data.verify_ai_no[0]){
        verify_ai = {
            gdmh: "C??",
            kqai: "V???",
            tlcx: data.verify_ai_no[0].wfl_ai_scoring,
            tgyc: data.verify_ai_no[0].created_at,
            tgkq: data.verify_ai_no[0].updated_at,
        }
    }

    //img ocr
    let ocr1 = image + data.doc_file_ocr[1].wfl_path
    let ocr2 = image + data.doc_file_ocr[2].wfl_path
    let ocr3 = image + data.doc_file_ocr[3].wfl_path
    let ocr4 = image + data.doc_file_ocr[4].wfl_path

    //img ai
    let ai1 = image + data.doc_file_ai[1].wfl_path
    let ai2 = image + data.doc_file_ai[2].wfl_path
    let ai3 = image + data.doc_file_ai[3].wfl_path
    let ai4 = image + data.doc_file_ai[4].wfl_path

    //View Video
    const [videos, setVideos] = useState([])
    const [visibaleVideoIndex, setVisileVideoIndex] = useState(0);
    const [openDia, setOpenDia] = useState(false);

    const handleOpenDia = (index) => {
        setVisileVideoIndex(index)
        setOpenDia(true);
    };
    const handleCloseDia = () => {
        setOpenDia(false);
    };

    useEffect(() => {
		const created_at = moment(data.created_at, 'YYYY-MM-DD HH:mm');
		const updated_at = moment(data.updated_at, 'YYYY-MM-DD HH:mm');
		const pol_fm_date = moment(data.pol_fm_date, 'YYYY-MM-DD HH:mm');
		const pol_end_date = moment(data.pol_end_date, 'YYYY-MM-DD HH:mm');
		const pol_approval_date = moment(data.pol_approval_date, 'YYYY-MM-DD HH:mm');
		let product=data.products[0] ? data.products[0] : {};
		let risk=data.risks[0] ? data.risks[0] : {};
        // let verify_ai = data.verify_ai[0] ? data.verify_ai[0] : {};
        //Get url video large
        setVideos ( (data.video).map(e =>({src:domain+ e.wfl_path_large})) )

		setDataPolicy({
			...product,
			...risk,
			...data,
			pol_status: data.status ? data.status?.pc_name : "",
			pol_pds: data.branch ? data.branch.br_vn_name : "",
			pol_pds_name:data.sub_class_setup ? data.sub_class_setup.sc_name : "",
			pol_approval_date:pol_approval_date.isValid() ? pol_approval_date.format("DD-MM-YYYY") : "",
			pol_end_date:pol_end_date.isValid() ? pol_end_date.format("DD-MM-YYYY") : "",
			pol_fm_date:pol_fm_date.isValid() ? pol_fm_date.format("DD-MM-YYYY") : "",
			// pol_cost_phone:data.pol_cost_phone? data.pol_cost_phone.replace(/\d{4}$/, 'XXXX'):"",
			pol_cost_phone:data.pol_cost_phone? data.pol_cost_phone:"",
			created_at:created_at.isValid() ? created_at.format("DD/MM/YYYY HH:mm") : "",
			updated_at:updated_at.isValid() ? updated_at.format("DD/MM/YYYY HH:mm") : "",
		})
		console.log('ok')
	}, [data])

    const ListVideo = videos.map( (e,index)=>{
        return(
            <Grid item sx key={index} >
                {/* <PlayCircleOutlineIcon 
                    className={`${classes2.imageocr} `} 
                    onClick={() =>handleOpenDia(index)}
                /> */}
                <div >
                    <ReactPlayer 
                        url={videos[index].src}
                        width='60px'
                        height='90px'
                        
                        className={`${classes2.imgVideo} `} 
                        onClick={() =>handleOpenDia(index)}
                    />
                </div>
                
            </Grid>
            )
      })



    return(
        <div className={classes2.root}>
            {/* {gdmh} */}
            <Grid container spacing={0} className={classes2.container}>
                {/* B??n tr??i 3 b???ng */}
                <Grid container item sx={12} md={5} className={classes2.left}>
                    {/* B???ng tr??n */}
                    <Grid container item sx={12} md={12} className={classes2.tabletop}>
                        <Grid container item sx={12} md={12} className={classes2.frameHeader}>
                            <Grid item sx={12} md={3.5}>
                                <Typography className={classes2.textHeader}>
                                    S??? H???p ?????ng 
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={2.5}>
                                <Typography className={classes2.textHeader}>
                                {dataPolicy.pol_no}
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={2}>
                                <Typography className={classes2.textHeader}>
                                    <FileCopyIcon color='secondary'/>
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={3} style={{display:'flex'}}>
                                <CheckCircleOutlineIcon color='secondary'/>
                                <Typography className={classes2.textHeader}>
                                    Hi???u l???c
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    H??? t??n kh??ch h??ng
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                {dataPolicy.pol_cust_name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    Email
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon}>
                                    {dataPolicy.pol_cost_email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    S??? ??i???n tho???i
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {dataPolicy.pol_cost_phone}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Kho???ng c??ch cho footer b???ng s??? h???p ?????ng*/}
                        </Grid>
                    </Grid>

                    {/* B???ng gi???a */}
                    <Grid container item sx={12} md={12} className={classes2.tablecenter} >
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Th??ng tin thi???t b???
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Th????ng hi???u
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {/* VIVO */}
                                    {dataPolicy.goods_make_name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    T??n thi???t b??? 
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {/* VIVO 123 */}
                                    {dataPolicy.goods_model_name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Lo???i thi???t b???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {/* Smartphone */}
                                    {dataPolicy.goods_cat_name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    IMEI 1
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {/* 869150051012755 */}
                                    {dataPolicy.goods_serial}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    IMEI 2
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    {/* 869150051012733 */}
                                    {dataPolicy.goods_serial2}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

                {/* B??n ph???i 2 b???ng */}
                <Grid container item sx={12} md={7} className={classes2.right}>
                    {/* B???ng tr??n */}
                    <Grid container item sx={12} md={12} className={classes2.tabletop}>
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Th??ng tin h???p ?????ng
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    ????n v??? b??n h??ng
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    MOMO
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Cty b???o hi???m
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    T???NG C??NG TY B???O HI???M PVI
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ph?? b???o hi???m tr?????c thu???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    9,000 VN??
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ph?? b???o hi???m sau thu???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    9,900 VN??
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    H???n m???c b???o hi???m
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    1,000,000 VN??
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    S??? l???n b???i th?????ng t???i ??a
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    1
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Th???i gian ch???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Kh??ng ??p d???ng
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    M???c kh???u tr???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    10%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    T??n g??i b???o hi???m
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    B???o hi???m v??? m??n h??nh ??i???n tho???i
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ng??y t???o h???p ?????ng
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    11/10/2021 00: 00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ng??y hi???u l???c
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    11/10/2021 00:00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ng??y h???t h???n
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    11/10/2021 00:00
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* S??? ng??y hi???u l???c c??n l???i */}
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
                            <Grid container item sx={12} md={12} 
                                    direction="row" justifyContent="space-between">
                                <Grid>
                                    <Typography className={classes2.textReq}>
                                        S??? ng??y hi???u l???c c??n l???i
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography className={classes2.textDate}>
                                        30 ng??y
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={12} md={12}> 
                                <div className={classes2.progress}>
                                    <div className={classes2.progress_done}>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ng??y c???p nh???t
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    11/10/2021 15:23
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ng?????i c???p nh???t
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    MOMO
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* ----Th??ng tin h???y ----- */}
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                   Th??ng tin h???y
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Th???i gian y??u c???u h???y
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    -
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    S??? ti???n ho??n tr???
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    -
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    requestId
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    -
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Kho???ng c??ch cho footer */}
                        </Grid>
                    </Grid>

                </Grid>
                
                {/* B???ng d?????i c??ng */}
                <Grid container item sx={12} md={12} className={classes2.tabledown}>
                    {/* B???ng tr??i */}
                    <Grid container item sx={12} md={7} >
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Th??ng tin x??c th???c
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    X??c th???c IMEI
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    C??
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon} >
                                    Gi??m ?????nh v??? m??n h??nh
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon} >
                                    {verify_ai.gdmh}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    Th???i gian kh??ch h??ng y??u c???u
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon}>
                                    11/10/2021 00:00
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    K???t qu??? OCR
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Th??nh c??ng
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    K???t qu??? AI
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon} >
                                    {verify_ai.kqai}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    Th???i gian h??? th???ng tr??? k???t qu??? 
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon}>
                                    11/10/2021 02:00
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    OCR - IMEI1
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    123123123123
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    T??? l??? ch??nh x??c
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon}>
                                    90,00 %
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    OCR - IMEI2
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    123123123123
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Kho???ng c??ch gi???a tr??n ???nh */}
                        </Grid>

                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    ???nh OCR
                                </Typography>
                            </Grid>
                            <Grid container item sx={12} md={12}  className={classes2.imgleft} >
                                <Grid item sx  >
                                    <img src={a1} 
                                    className={`${classes2.imgOCR} `}/>
                                </Grid>
                                <Grid item sx  >
                                    <img src={a2} 
                                    className={`${classes2.imgOCR} `} style={{marginLeft:'13px'}}/>
                                </Grid>
                            </Grid>
                            <Grid container item sx={12} md={12}  className={classes2.imgleft} >
                                <Grid item sx  >
                                    <img src={a3} 
                                    className={`${classes2.imgOCR} `}/>
                                </Grid>
                                <Grid item sx  >
                                    <img src={a4} 
                                    className={`${classes2.imgOCR} `} style={{marginLeft:'13px'}}/>
                                </Grid>
                            </Grid>

                        </Grid>
                        
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    ???nh AI
                                </Typography>
                            </Grid>
                            <Grid container item sx={12} md={12}  className={classes2.imgright}>
                                <Grid item sx  >
                                    <img src={a1} 
                                    className={`${classes2.imgOCR} `}/>
                                </Grid>
                                <Grid item sx  >
                                    <img src={a2} 
                                    className={`${classes2.imgOCR} `} style={{marginLeft:'13px'}}/>
                                </Grid>
                            </Grid>
                            <Grid container item sx={12} md={12}  className={classes2.imgright}>
                                <Grid item sx  >
                                    <img src={a3} 
                                    className={`${classes2.imgOCR} `}/>
                                </Grid>
                                <Grid item sx  >
                                    <img src={a4} 
                                    className={`${classes2.imgOCR} `} style={{marginLeft:'13px'}}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item sx={12} md={12} className={classes2.frameVideo}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textVideo}>
                                    Video
                                </Typography>
                            </Grid>
                            {ListVideo}

                        </Grid>

                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Kho???ng c??ch cho footer */}
                        </Grid>
                    </Grid>
                    {/* B???ng ph???i ????? tr???ng */}
                    <Grid container item sx={12} md={5} >
                        <Grid container item sx={12} md={6} className={classes2.frameHeader} >
                            <Grid item sx={12} md={12} style={{backgroundColor:'yellow'}}>
                                <Grid item sx={12} md={12}></Grid>
                                
                                <Grid item sx={12} md={12}>
                                    <Button variant="outlined" size="large" color="secondary" >
                                        X??c th???c th??nh c??ng
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.frameHeader}>
                            <Grid item sx={12} md={12} style={{backgroundColor:'pink'}} >
                                <Grid item sx={12} md={12}></Grid>
                                
                                <Grid item sx={12} md={12}>
                                    <Button variant="outlined" size="large" color="secondary" >
                                        X??c th???c th???t b???i
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
                
            </Grid>
            {/* Show DiaLog */}
            {/* <Dialogs/> */}
            <Videos 
                openDia={openDia} 
                handleCloseDia={handleCloseDia}
                linkVideo={link2} 
                index={visibaleVideoIndex}/>
        </div>
    )
}