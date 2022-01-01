import React, { useEffect, useState, useCallback } from 'react';
import { createMuiTheme, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import {  Grid, TableCell, TableRow,  } from '@material-ui/core';
import renderTextField from 'components/Common/ReduxForm/TextField.js';
// import renderDateField from 'components/Common/ReduxForm/DateField';
//du phong
import { Field, reduxForm } from 'redux-form'
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import renderDateField from "../../../components/Common/ReduxForm/DateFieldFormat";
import moment from "moment";
import { currencyFormat } from "../../../components/Common/Function";
import CollapseComponent from "../../../components/CollapseCompoment";
import renderSelectField from 'components/Common/ReduxForm/SelectField.js';
import MenuItem from '@material-ui/core/MenuItem';


// import Button from "components/CustomButtons/Button";
import SelectBox from 'components/Common/ReduxForm/SelectBox';
import Link from "../../../components/CustomLink/Link";
import { withRouter } from "react-router"
import { connect } from 'react-redux';
import ClaimHistory from './ClaimHistory2';
// import muiTheme from 'assets/jss/muiTheme';
import muiTheme2 from './muiTheme';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import purple from '@material-ui/core/colors/purple';
import { ThemeProvider } from '@material-ui/core/styles';
import Viewer from 'react-viewer';

//Dialog
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


//React Media Player
import { Media, Player, controls, utils } from 'react-media-player'
// const {
//     PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute,
//     Volume,Fullscreen,
//     } = controls

//template
import {response} from './template'

//plyr-react
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/dist/plyr.css";
import Button from '@material-ui/core/Button';

const link1= 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'
// import Temp from './Temp' 

const a1 = "http://localhost/code/baohiem/check/1.jpg"
const a2 = "http://localhost/code/baohiem/check/2.jpg"
const a3 = "http://localhost/code/baohiem/check/3.jpg"
const a4 = "http://localhost/code/baohiem/check/4.jpg"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const StyledTableCell = withStyles((theme) => ({
	head: {
		// backgroundColor: primaryColor,
		// backgroundColor: successColor,
		// color: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.5)',
		// fontFamily: "Open Sans",
		fontStyle: 'normal',
		fontWeight: '600',
		borderBottom: 'none',
	},
	body: {
		fontSize: 14,
	},

	// fieldHeader: {
	//   boxShadow: '0px 25px 30px -20px rgba(41,247,22,1)',
	// }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({

	table: {
		width: "100%"
	},
	cardTitleWhite: {
		color: "#fff",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},

	cardHeader: {
		boxShadow: '0px 25px 30px -20px rgba(41,247,22,1)'
	},

	partialLabel: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		// fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "25px",
		letterSpacing: "0.0015em",
		color: "rgba(0, 0, 0, 0.6)",
		marginTop: "10px",
		marginBottom: "10px",
		marginLeft: -15,
	},

	horizontalLine: {
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		height: "1px",
		marginLeft: -15,
		marginRight: -15,
		marginBottom: "10px",
	},

	submitButton: {
		width: '50%',
		marginTop: '16px',
		borderRadius: '8px',

		fontFamily: 'Roboto',
		fontSize: '1.1rem',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: '24px',
		letterSpacing: '0.0015rem',
		textAlign: 'center',

	},
	outlineField: {
		margin: 0,
		marginRight: '2px',
		marginBottom: '2px',
		"& label.Mui-disabled": {
			color: "rgba(69,69,69,0.92)",
		},
		"& label.Mui-focused": {
			color: "#006AFF",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			boxSizing: 'border-box',
			borderColor: "#006AFF",
		},

	},
	input: {
		marginTop: "8px !important"
	},
	cardBody: {
		padding: "10px",
		borderRadius: "0",
	},
	card: {
		margin: 0,
		marginBottom: 10,
		borderRadius: "0"
	},
	actionButton: {
		marginLeft: "10px",
		padding: '1px 15px',
		textTransform: "capitalize",
		fontSize: '12px',
		fontWeight: 'bold',
		borderRadius: '3px',
	},
	disabledButton: {
		marginLeft: "10px",
		padding: '1px 15px',
		backgroundColor: '#999999',
		color: '#FFFFFF',
		textTransform: "capitalize",
		fontSize: '12px',
		fontWeight: 'bold',
		borderRadius: '3px',
		border: 'none',
		'&:hover': {
			backgroundColor: '#999999',
			color: '#FFFFFF',
		}
	}


});
//them "/" khong ra hinh anh
const image = "/"
const verify_default = {
    gdmh: "Không",
    kqai: null,
    tlcx: null,
    tgyc: null,
    tgkq: null
}


const src_img = "http://localhost/code/baohiem/check/iphone.jpg"

const useStyles2 = makeStyles( (theme)=>({
    rootTab:{
        width:'100%'
    },
    root: {
      flexGrow: 1,
      backgroundColor:'#E5E5E5',
      padding:'8.5%'
    },
    container:{
        // paddingTop: '16px',
        // paddingBottom:'16px',
        marginTop:'16px',
        marginBottom:'16px',
        padding: '3px'
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
	textHeader2:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
		// color: '#54DE7E'
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
    img1:{
        margin: '10px 0px 0px 8px'
    },
    img2:{
        margin: '10px 0px 0px 13px'
    },
    img3:{
        margin: '13px 0px 0px 8px'
    },
    img4:{
        margin: '13px 0px 0px 13px'
    },
    img5:{
        margin: '10px 0px 0px 0px'
    },
    img6:{
        margin: '10px 0px 0px 13px'
    },
    img7:{
        margin: '13px 0px 0px 0px'
    },
    img8:{
        margin: '13px 0px 0px 13px'
    },
    textDate:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#54DE7E',
        margin: '0px 0px 0px 55px',
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
    imageai:{
        margin:'13px 13px 13px 0px',
        height: '61px',
        width: '52px',
    },
    textocr:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F',
    },
    imgVideo:{
        margin:'13px 13px 13px 0px',
    },
    certificateButton:{
        marginLeft: "10px",
		padding: '4px 20px',
		textTransform: "capitalize",
		fontSize: '12px',
		fontWeight: 'bold',
		borderRadius: '3px',
        backgroundColor: '#54DE7E'
    }
  }))

  const styleDia = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styleDia)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });



const required = value => value ? undefined : 'Settlement Amount is required';
const mustGtZero = value =>
	value && parseInt(`${value}`.replaceAll(',', '')) > 0 ? undefined : 'Settlement Amount must be greater than 0';


function PolicyForm(props) {
	const classes = useStyles();
	const theme = useTheme();
	const classes2 = useStyles2()
	const [dataPolicy, setDataPolicy] = useState({})

    const [value, setValue] = React.useState(0);
    // const [ open1, setOpen1 ] = React.useState(false);
    // const [ open2, setOpen2 ] = React.useState(false);
    // const [ open3, setOpen3 ] = React.useState(false);
    // const [ open4, setOpen4 ] = React.useState(false);
    // const [ open5, setOpen5 ] = React.useState(false);
    // const [ open6, setOpen6 ] = React.useState(false);
    // const [ open7, setOpen7 ] = React.useState(false);
    // const [ open8, setOpen8 ] = React.useState(false);

    //View Ocr
    const [imgOcrs, setImgOcrs] = useState([]);
    const [visibaleOcrIndex, setVisileOcrIndex] = useState(0);
    const [openOcr, setOpenOcr] = useState(false);
    const handleViewOcr = (index) => {
      setVisileOcrIndex(index);
      setOpenOcr(true);
    }

    //View Ai
    const [imgAis, setImgAis] = useState([]);
    const [visibaleAiIndex, setVisileAiIndex] = useState(0);
    const [openAi, setOpenAi] = useState(false);
    const handleViewAi = (index) => {
        setVisileAiIndex(index);
        setOpenAi(true);
    }

    //View Video
    const [videos, setVideos] = useState([])
    const [visibaleVideoIndex, setVisileVideoIndex] = useState(0);
    const [openDia, setOpenDia] = useState(false);
    const handleOpenDia = (index) => {
        setVisileVideoIndex(index)
        // alert(index)
        setOpenDia(true);
    };
    const handleCloseDia = () => {
        setOpenDia(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

	const { statusList, handleSubmit, isLoading, roles, initialize, histories, permissions } = props;
	let data = props.data

    let data2 = response.data
    // moment('2019-11-03T05:00:00.000Z').utc().format('MM/DD/YYYY')

    let time_created_at = data.time_created_at ? 
                        moment(data.time_created_at).utc().format('DD/MM/YYYY HH:mm') : ""
    let time_updated_at = data.time_updated_at ?
                         moment(data.time_updated_at).utc().format('DD/MM/YYYY HH:mm') : ""

    // //chung chi certificate
    // let certificate = data.certificate ? data.certificate : ""
    //hieu luc
    let policy_status = "Hết hiệu lực"
    if(data.pol_status == "Active"){
        policy_status = "Hiệu lực"
    }
    if(data.pol_status == "Cancelled"){
        policy_status = "Hủy"
    }

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



	const [collapse1, setCollapse1] = React.useState(false)
	const [collapse2, setCollapse2] = React.useState(false)
	const [openClaimHistory, setOpenClaimHistory] = React.useState(true)

	useEffect(() => {
        //Get url ocr large
        setImgOcrs( (data.doc_file_ocr).map(e =>({src:"/"+ e.wfl_path_large, src2:"/"+ e.wfl_path})) )
        //Get url ai large
        setImgAis ( (data.doc_file_ai).map(e =>({src:"/"+ e.wfl_path_large, src2:"/"+ e.wfl_path})) )
        //Get url video large
        setVideos ( (data.video).map(e =>({src:"/"+ e.wfl_path_large})) )

		const created_at = moment(data.created_at, 'YYYY-MM-DD HH:mm');
		const updated_at = moment(data.updated_at, 'YYYY-MM-DD HH:mm');
		const pol_fm_date = moment(data.pol_fm_date, 'YYYY-MM-DD HH:mm');
		const pol_end_date = moment(data.pol_end_date, 'YYYY-MM-DD HH:mm');
		const pol_approval_date = moment(data.pol_approval_date, 'YYYY-MM-DD HH:mm');
        
		let product=data.products[0] ? data.products[0] : {};
		let risk=data.risks[0] ? data.risks[0] : {};
		initialize({
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
            
		});
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

	}, [data])

    const ListImgOcr = imgOcrs.map( (e,index)=>{
        return(
            <Grid item sx key={index}>
                <img src={e.src2} className={`${classes2.imageocr} `} 
                     onClick={() => { handleViewOcr(index) }}/>
            </Grid>
            )
      })
    const ListImgAi = imgAis.map( (e,index)=>{
        return(
            <Grid item sx key={index}>
                <img src={e.src2} className={`${classes2.imageai} `} 
                     onClick={() => { handleViewAi(index) }}/>
            </Grid>
            )
      })
      const Dialogs = (props)=>{
        const {url} = props
        return (
            <div>
              <Dialog onClose={handleCloseDia}  open={openDia}>
                <DialogTitle  onClose={handleCloseDia}>
                  Video {visibaleVideoIndex + 1}
                  {/* {url} */}
                </DialogTitle>
                <Plyr
                    source={{
                    type: "video",
                    sources: [
                        {
                        src: url,
                        }
                    ]
                    }}
                />
              </Dialog>
            </div>
          );
    }    
    const ListVideo = videos.map( (e,index)=>{
        return(
            <Grid item sx key={index} >
                <Media >
                    <Player 
                        src={videos[index].src} 
                        style={{height:'100px', width:'60px'}}
                        className={`${classes2.imgVideo} `} 
                        onClick={() =>handleOpenDia(index)}
                    />                  
                </Media>
                <Dialogs url={videos[index].src}/>
            </Grid>
            )
    })

    const handleCertificate = ( url ) => {
        window.open(url);
      };
    
	const BackButton = withRouter(({history, location}) => (<Button className="backbutton" className={classes.disabledButton} variant="outlined" color="disabled" size="sm" onClick={() => history.push('/admin/policy')}>Trở lại</Button>));

	return (
    <ThemeProvider theme={muiTheme2} >
		<form onSubmit={handleSubmit}>
			<Card>
				<CardBody className={classes.customCardBody} >

                {/* <ClaimHistory open={openClaimHistory} setOpen={setOpenClaimHistory} policyId={data.id}/> */}
        <div className={classes2.rootTab}>
            <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                
                aria-label="full width tabs example"
                style={{textColor:'red'}}
                >
                <Tab label="THÔNG TIN HỢP ĐỒNG" {...a11yProps(0)} />
                <Tab label="LỊCH SỬ YCBT" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
      
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                >
                <div value={value} index={0} dir={theme.direction}>
                {/* Thông tin hợp đồng */}
                    <Grid container spacing={0} className={classes2.container}>
                        {/* Bên trái 3 bảng */}
                        <Grid container item sx={12} md={5} className={classes2.left}>
                            {/* Bảng trên */}
                            <Grid container item sx={12} md={12} className={classes2.tabletop}>
                                <Grid container item sx={12} md={12}  className={classes2.framecontent} >
                                    <Grid item sx={12} md={3} >
                                        <Typography className={classes2.textHeader} style={{color:'#8A939F'}}>
                                            Số Hợp Đồng
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} md={4} >
                                        <Typography className={classes2.textHeader}>
                                            {dataPolicy.pol_no}
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} md={1} >
                                        <FileCopyIcon style={{color:'#54DE7E'}} />
                                    </Grid>
                                    <Grid item sx={12} md={4}  style={{display:'flex'}}>
                                        <CheckCircleOutlineIcon style={{color:'#1344C9'}}/>
                                        <Typography className={classes2.textHeader} style={{color:'#1344C9'}}>
                                        {/* Hiệu lực */}
                                        {policy_status}
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
                                            Số điện thoại
                                        </Typography>
                                        </Grid>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textRes}>
                                            {dataPolicy.pol_cost_phone}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item sx={12} md={6} className={classes2.framecontent} >
                                    <Grid item sx={12} md={12}>
                                        {/* Nút chứng chỉ */}
                                        <Typography className={classes2.textResNon}>
                                            { dataPolicy.pol_url_certificate &&
                                                // <button onClick={()=> handleCertificate(dataPolicy.pol_url_certificate)}> Chứng chỉ</button>
                                                <Button variant="contained" color="secondary" onClick={()=> handleCertificate(dataPolicy.pol_url_certificate)}>
                                                    Giấy CHỨNG NHẬN
                                                </Button>
                                            }

                                                
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                                    {/* Khoảng cách cho footer */}
                                </Grid>
                            </Grid>

                            {/* Bảng giữa */}
                            <Grid container item sx={12} md={12} className={classes2.tablecenter}>
                                <Grid item sx={12} md={12} className={classes2.framecontent}>
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
                                            {dataPolicy.goods_make_name}
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
                                            {dataPolicy.goods_model_name}
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
                                        {dataPolicy.goods_serial2}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                                    {/* Khoảng cách cho footer */}
                                </Grid>
                            </Grid>

                            {/* Bảng dưới */}
                            {/* <Grid container item sx={12} md={12} >
                                <Grid item sx={12} md={12} style={{marginBottom:'100px'}}>
                                    Khoảng giữa cho các Table
                                </Grid>
                            </Grid> */}

                        </Grid>

                        {/* Bên phải 2 bảng */}
                        <Grid container item sx={12} md={7} className={classes2.right}>
                            {/* Bảng trên */}
                            <Grid container item sx={12} md={12} className={classes2.tabletop}>
                                <Grid item sx={12} md={12} className={classes2.framecontent}>
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
                                            {dataPolicy.pol_prod_name}
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
                                            {dataPolicy.pol_pds}
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
                                            {dataPolicy.pol_amount_prem} VNĐ
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
                                                                            {dataPolicy.pol_amount_total} VNĐ
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
                                            {dataPolicy.pol_sum_insured}
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
                                            {dataPolicy.total_claim_close}
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
                                            {dataPolicy.goods_waiting_period}
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
                                            {dataPolicy.risk_ded_replace} %
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
                                            {dataPolicy.pol_pds_name}
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
                                            {dataPolicy.created_at}
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
                                            {dataPolicy.pol_fm_date}
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
                                            {dataPolicy.pol_end_date}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* Số ngày hiệu lực còn lại */}
                                <Grid container item sx={12} md={12} className={classes2.framecontent}>
                                    
                                    <Grid item sx={12} md={9}>
                                        <Typography className={classes2.textReq}>
                                            Số ngày hiệu lực còn lại
                                        </Typography>
                                    </Grid >
                                    <Grid item sx={12} md={3}>
                                        <Typography className={classes2.textDate}>
                                            {dataPolicy.date_left} ngày
                                        </Typography>
                                        
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
                                            {dataPolicy.updated_at}
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
                                            {dataPolicy.updated_by}
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
                                            {dataPolicy.pol_end_cancelled}
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
                                            {dataPolicy.pol_flexi02}
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
                                            {dataPolicy.pol_flexi05}
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
                                <Grid container item sx={12} md={12} className={classes2.frameHeader} >
                                    <Grid item sx={12} md={4}>
                                        <Typography className={classes2.textHeader}>
                                            Thông tin xác thực
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={12} md={4}>
                                        
                                    </Grid>
                                    {/* Xac thuc thanh cong mau xanh */}
                                    { dataPolicy.status_policy == "Đã xác thực" ?
                                    <Grid item sx={12} md={4} style={{display:'flex'}}>
                                        <CheckCircleOutlineIcon style={{color:'#54DE7E'}}/>
                                        <Typography className={classes2.textHeader2} style={{color:'#54DE7E'}}>
                                            {dataPolicy.status_policy} 
                                        </Typography>
                                    </Grid>
                                    :
                                    <Grid item sx={12} md={4} style={{display:'flex'}}>
                                        <CheckCircleOutlineIcon style={{color:'#FF6D6D'}}/>
                                        <Typography className={classes2.textHeader2} style={{color:'#FF6D6D'}}>
                                            {dataPolicy.status_policy} 
                                        </Typography>
                                    </Grid>
                                    }
                                    
                                </Grid>
                                <Grid container item sx={12} md={4} className={classes2.framecontent}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textReq}>
                                            Xác thực IMEI
                                        </Typography>
                                        </Grid>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textRes}>
                                            {dataPolicy.verify_image}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item sx={12} md={4} className={classes2.framecontent}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textReqNon}>
                                            Giám định vỡ màn hình
                                        </Typography>
                                        </Grid>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textResNon}>
                                            {/* {verify_ai.gdmh} */}
                                            {dataPolicy.screen_breakage}
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
                                            {/* {verify_ai.tgyc} */}
                                            {/* {dataPolicy.time_created_at} */}
                                            {time_created_at}
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
                                            {dataPolicy.result_ocr}
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
                                        <Typography className={classes2.textResNon}>
                                            {/* {verify_ai.kqai} */}
                                            {dataPolicy.result_ai}
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
                                            {/* {verify_ai.tgkq} */}
                                            {/* {dataPolicy.time_updated_at} */}
                                            {time_updated_at}
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
                                            {dataPolicy.goods_serial}
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
                                            {/* {verify_ai.tlcx} */}
                                            {dataPolicy.wfl_ai_scoring}
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
                                            {dataPolicy.goods_serial2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                                    {/* Khoảng cách giữa trên ảnh */}
                                </Grid>

                                <Grid container item sx={12} md={4} className={classes2.framecontent} style={{marginLeft:'16px'}}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textocr}>
                                            Ảnh OCR
                                        </Typography>
                                    </Grid>
                                
                                    {ListImgOcr}
                                </Grid>
                                
                                <Grid container item sx={12} md={4} className={classes2.framecontent}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textReqNon}>
                                            Ảnh AI
                                        </Typography>
                                    </Grid>

                                    {ListImgAi}
                                </Grid>

                                {/* <Grid container item sx={12} md={12} className={classes2.framecontent} style={{marginLeft:'16px', backgroundColor:'pink'}}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textocr}>
                                            Video 
                                        </Typography>
                                    </Grid>
                                
                                    {ListImgOcr}
                                </Grid> */}
                                <Grid container item sx={12} md={12} className={classes2.framecontent} style={{marginLeft:'16px',}}>
                                    <Grid item sx={12} md={12}>
                                        <Typography className={classes2.textocr} >
                                            Video 
                                        </Typography>
                                    </Grid>
                                    { data2.video.length ?
                                        <>
                                        {ListVideo}
                                        </>
                                        : 
                                        null
                                    }
                                    
                                </Grid>
                                
                                <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                                    {/* Khoảng cách cho footer */}
                                </Grid>
                            </Grid>
                            {/* Bảng phải để trống */}
                            <Grid container item sx={12} md={5} >
                                    
                                {/* <Grid container item sx={12} md={6} className={classes2.frameHeader} >
                                    <Grid item sx={12} md={12} >
                                        <Grid item sx={12} md={12}></Grid>
                                        
                                        <Grid item sx={12} md={12}>
                                            <Button variant="outlined" size="large" color="primary" >
                                                Xác thực thành công
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Grid container item sx={12} md={6} className={classes2.frameHeader}>
                                    <Grid item sx={12} md={12}  >
                                        <Grid item sx={12} md={12}></Grid>
                                        
                                        <Grid item sx={12} md={12}>
                                            <Button variant="outlined" size="large" color="primary" >
                                                Xác thực thất bại
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid> */}

                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <div value={value} index={1} dir={theme.direction}>
                    <ClaimHistory open={openClaimHistory} setOpen={setOpenClaimHistory} policyId={data.id}/>
                </div>

            </SwipeableViews>
        </div>

        <Viewer
            visible={openOcr}
            onClose={() => { setOpenOcr(false); }}
            images={imgOcrs}
            zoomSpeed={0.15}
            zIndex={99999999}
            activeIndex={visibaleOcrIndex}
            noNavbar={true}
        />                         
        <Viewer
            visible={openAi}
            onClose={() => { setOpenAi(false); }}
            images={imgAis}
            zoomSpeed={0.15}
            zIndex={99999999}
            activeIndex={visibaleAiIndex}
            noNavbar={true}
        />
        {/* <Dialogs/> */}
        
        
				</CardBody>
			</Card >
		</form >
        
        
                                   
    </ThemeProvider>    
	)
}

const validate = values => {
	const requiredFields = ['status'];
	const errors = {}
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Bắt buộc';
		}
	})
	return errors;
}
const mapStateToProps = (state, props) => {
	const { data } = props;
	return {
		layout: state.reducerUser.layout,
		initialValues: {
			amount: data.claim_amount,
			status: data.claim_status,
			remark: data.remark
		},
		permissions: state.reducerUser.permissions,
	};
}
PolicyForm = reduxForm({
	form: 'PolicyForm', // a unique identifier for this form
	validate
})(PolicyForm);

export default connect(mapStateToProps)(PolicyForm);
