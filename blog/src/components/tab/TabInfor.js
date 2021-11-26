// import Grid from '../grid/Gird'
import styles from './TabInfor.module.css'
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon  from '@mui/icons-material/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles((theme) => ({
    text: { //Chữ in đậm
      fontWeight: 'bold',
      fontSize: '16px',
    },
    pale:{ //Chữ màu nhạt
        color: '#757575'
    },
    black:{
        color: '#212121'
    },
    secondary: {
        color: '#54DE7E',
      },
    left:{
        marginLeft: '10px'
    },
    right:{
        marginRight: '10px'
    },
    textValue:{
        fontSize: '14px',
        color: '#757575'
    }
  }));

export default function TabInfor(){
    const numberContract = "345765767"
    const classes = useStyles();
    return (
    <div style={{display:'flex', backgroundColor:'#EEF1F5'}}>
        {/* Bêsn trái 2 bảng lớn */}
        <div style={{display:'flex', flex:4.5, flexDirection:'column',}}> 
            {/* ----------------Bảng nhỏ trên bên trái----------------- */}
            <div style={{display:'flex', width:'100%', paddingLeft:'15px', backgroundColor:'#FFFFFF'}}> {/* bảng trên */}
                <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
                    <div style={{display:'flex'}} >{/* Header */}
                       <div style={{display:'flex',flex:1 , justifyContent:'space-between', }}>
                            <Typography className={`${classes.text} ${classes.pale}`}>
                                Số Hợp Đồng
                            </Typography>
                            <Typography className={`${classes.text} ${classes.black}`}>
                                {numberContract}
                            </Typography>
                       </div>
                       <div style={{display:'flex',flex:1}}>
                           <div style={{flex:1}}>
                            <FileCopyIcon color='secondary'/>
                           </div>
                           <div style={{display:'flex',flex:1}}>
                            <CheckCircleOutlineIcon color='secondary'/>
                                <Typography className={`${classes.text} ${classes.secondary}`}>
                                    Hiệu lực
                                </Typography>
                            </div>
                       </div>
                    </div>
                    <div style={{display:'flex'}}>{/* Body chia làm 2 bên*/} 
                        <div style={{flex:'1',display:'flex', flexDirection:'column'}}> {/* Body trái*/} 
                            <Typography className={`${classes.textValue}`}>
                                Họ tên
                            </Typography>
                            <Typography className={`${classes.text}`}>
                                Tuấn Danh
                            </Typography>
                            <Typography className={`${classes.textValue}`}>
                                Số diện thoại
                            </Typography>
                            <Typography className={`${classes.text}`}>
                                0989698237
                            </Typography>
                        </div>
                        <div style={{display:'flex', flex:'1', flexDirection:'column'}}>{/* Body phải*/} 
                            <Typography className={`${classes.textValue}`}>
                                Email:
                            </Typography>
                            <Typography className={`${classes.text}`}>
                                trantuandanh@gmail.com
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------Bảng nhỏ dưới bên trái----------------- */}
            <div style={{display:'flex', width:'100%', paddingLeft:'15px', backgroundColor:'#FFFFFF', marginTop:'35px'}}> {/* bảng dưới */}
                <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
                        <div style={{display:'flex'}} >{/* Header */}
                        <div style={{display:'flex',flex:1 , justifyContent:'space-between', }}>
                                <Typography className={`${classes.text} ${classes.pale}`}>
                                    Thông tin thiết bị
                                </Typography>
                        </div>
                        <div style={{display:'flex',flex:1}}>
                        </div>
                        </div>
                        <div style={{display:'flex'}}>{/* Body chia làm 2 bên*/} 
                            <div style={{flex:'1',display:'flex', flexDirection:'column'}}> {/* Body trái*/} 
                                <Typography className={`${classes.textValue}`}>
                                    Tên thiết bị
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    VIVO 1910
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Loại thiết bị
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    SmartPhone
                                </Typography>
                            </div>
                            <div style={{display:'flex', flex:'1', flexDirection:'column'}}>{/* Body phải*/} 
                                <Typography className={`${classes.textValue}`}>
                                    Nhà sản xuất thiết bị
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    VIVO
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    IMEI
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    0869150051012733
                                </Typography>
                            </div>
                        </div>
                </div>
            </div>
        </div >
        {/* --------------- Bảng lớn bên Phải --------------------- */}
        <div style={{display:'flex',   flex: 5.5}}> {/* Bên Phải 1 bảng lớn*/}
        <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
                        <div style={{display:'flex'}} >{/* Header */}
                        <div style={{display:'flex',flex:1 , justifyContent:'space-between', }}>
                                <Typography className={`${classes.text} ${classes.pale}`}>
                                    Thông tin giá trị
                                </Typography>
                        </div>
                        <div style={{display:'flex',flex:1}}>
                        </div>
                        </div>
                        <div style={{display:'flex'}}>{/* Body chia làm 2 bên*/} 
                            <div style={{flex:'1',display:'flex', flexDirection:'column'}}> {/* Body trái*/} 
                                <Typography className={`${classes.textValue}`}>
                                    Đơn vị bán hàng
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    Công ty cổ phần Thế Giới Di Động
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Giá bán sản phẩm
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    4,990,000 VNĐ
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Phí bảo hiểm sau thuế
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    1,990,000 VNĐ
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Số tiền bồi thường
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    0 
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Thời gian xuất bán
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    - 
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Tên gói bảo hiểm
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    PVI_Bảo hiểm rơi vỡ
                                </Typography>
                            </div>
                            <div style={{display:'flex', flex:'1', flexDirection:'column'}}>{/* Body phải*/} 
                                <Typography className={`${classes.textValue}`}>
                                    Cty Bảo Hiểm
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    CÔNG TY BẢO HIỂM PVI PHÍA NAM
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Phí bảo hiểm trước thuế
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    1,990,000 VNĐ
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Số lần bồi thường
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    4
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Số tiền BH còn Loại
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    11,350,000 VNĐ
                                </Typography>
                                <Typography className={`${classes.textValue}`}>
                                    Ngày xuất hợp đồng
                                </Typography>
                                <Typography className={`${classes.text}`}>
                                    11/10/2021 00:00
                                </Typography>
                            </div>
                        </div>
                </div>
        </div >
    </div>
    )
}