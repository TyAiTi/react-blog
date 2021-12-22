
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon  from '@mui/icons-material/CheckCircleOutline';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useState, useEffect } from 'react';
import {props} from './template2'
import moment from "moment";

import Videos from './Videos';
import ReactPlayer from 'react-player'
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
    gdmh: "Không",
    kqai: null,
    tlcx: null,
    tgyc: null,
    tgkq: null
}


export default function GridBasic(){
    
    const classes2 = useStyles2()
    let data = props.data
    const [dataPolicy, setDataPolicy] = useState({}) 

    //verify_ai
    let verify_ai = verify_default
    if(data.verify_ai[0]){
        verify_ai = {
            gdmh: "Có",
            kqai: "Không vỡ",
            tlcx: data.verify_ai[0].wfl_ai_scoring,
            tgyc: data.verify_ai[0].created_at,
            tgkq: data.verify_ai[0].updated_at,
        }
    }
    if( !data.verify_ai[0] && data.verify_ai_no[0]){
        verify_ai = {
            gdmh: "Có",
            kqai: "Vỡ",
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
                {/* Bên trái 3 bảng */}
                <Grid container item sx={12} md={5} className={classes2.left}>
                    {/* Bảng trên */}
                    <Grid container item sx={12} md={12} className={classes2.tabletop}>
                        <Grid container item sx={12} md={12} className={classes2.frameHeader}>
                            <Grid item sx={12} md={3.5}>
                                <Typography className={classes2.textHeader}>
                                    Số Hợp Đồng
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={2.5}>
                                <Typography className={classes2.textHeader}>
                                    345765767 
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
                                    Hiệu lực
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Họ tên khách hàng
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Tuấn Danh
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
                                    trantuandanh95@gmail.com 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Số điện thoại
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    0989698237
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Khoảng cách cho footer bảng số hợp đồng*/}
                        </Grid>
                    </Grid>

                    {/* Bảng giữa */}
                    <Grid container item sx={12} md={12} className={classes2.tablecenter} >
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Thông tin thiết bị
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Thương hiệu
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    VIVO
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Tên thiết bị 
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    VIVO 123
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Loại thiết bị
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Smartphone
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
                                    869150051012755
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
                                    869150051012733
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Khoảng cách cho footer */}
                        </Grid>
                    </Grid>

                    {/* Bảng dưới */}
                    <Grid container item sx={12} md={12} >
                        <Grid item sx={12} md={12} style={{marginBottom:'100px'}}>
                            {/* Khoảng giữa cho các Table */}
                        </Grid>
                    </Grid>

                </Grid>

                {/* Bên phải 2 bảng */}
                <Grid container item sx={12} md={7} className={classes2.right}>
                    {/* Bảng trên */}
                    <Grid container item sx={12} md={12} className={classes2.tabletop}>
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Thông tin hợp đồng
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Đơn vị bán hàng
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
                                    Cty bảo hiểm
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    TỔNG CÔNG TY BẢO HIỂM PVI
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Phí bảo hiểm trước thuế
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    9,000 VNĐ
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Phí bảo hiểm sau thuế
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    9,900 VNĐ
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Hạn mức bảo hiểm
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    1,000,000 VNĐ
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Số lần bồi thường tối đa
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
                                    Thời gian chờ
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Không áp dụng
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Mức khấu trừ
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
                                    Tên gói bảo hiểm
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Bảo hiểm vỡ màn hình điện thoại
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ngày tạo hợp đồng
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
                                    Ngày hiệu lực
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
                                    Ngày hết hạn
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    11/10/2021 00:00
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* Số ngày hiệu lực còn lại */}
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
                            <Grid container item sx={12} md={12} 
                                    direction="row" justifyContent="space-between">
                                <Grid>
                                    <Typography className={classes2.textReq}>
                                        Số ngày hiệu lực còn lại
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography className={classes2.textDate}>
                                        30 ngày
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
                                    Ngày cập nhật
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
                                    Người cập nhật
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    MOMO
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* ----Thông tin hủy ----- */}
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                   Thông tin hủy
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={6} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Thời gian yêu cầu hủy
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
                                    Số tiền hoàn trả
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
                            {/* Khoảng cách cho footer */}
                        </Grid>
                    </Grid>

                </Grid>
                
                {/* Bảng dưới cùng */}
                <Grid container item sx={12} md={12} className={classes2.tabledown}>
                    {/* Bảng trái */}
                    <Grid container item sx={12} md={7} >
                        <Grid item sx={12} md={12} className={classes2.frameHeader}>
                            <Typography className={classes2.textHeader}>
                                Thông tin xác thực
                            </Typography>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Xác thực IMEI
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Có
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon} >
                                    Giám định vỡ màn hình
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
                                    Thời gian khách hàng yêu cầu
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
                                    Kết quả OCR
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                    Thành công
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    Kết quả AI
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
                                    Thời gian hệ thống trả kết quả 
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
                                    Tỉ lệ chính xác
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
                            {/* Khoảng cách giữa trên ảnh */}
                        </Grid>

                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ảnh OCR
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
                                    Ảnh AI
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
                            {/* Khoảng cách cho footer */}
                        </Grid>
                    </Grid>
                    {/* Bảng phải để trống */}
                    <Grid container item sx={12} md={5} >

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