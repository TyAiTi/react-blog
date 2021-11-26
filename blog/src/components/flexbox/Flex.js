

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon  from '@mui/icons-material/CheckCircleOutline';
const useStyles = makeStyles((theme) => ({
    sapeTop:{
        marginTop: '26px'
    },
    spaceHeader:{
        marginTop: '20px'
    },
    spaceLeft:{
        marginLeft: '13px',
    },
    spaceRight:{
        marginRight: '13px',
    },
    border:{
        borderRadius: '10px',
        padding: '15px'
    },
    borderBotton:{
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        padding: '15px'
    },
    textHeader:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold'
    },
    pale:{
        color:'#8A939F'
    },
    dark:{
        color:'#323C4A'
    },
    secondary: {
        color: '#54DE7E',
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
    }
  }));

export default function Flex(){
    const classes = useStyles();
    const numberContract = '345765767'
    const obPerson = {
        name: 'Tuấn Danh',
        phone: '0989698237',
        email: 'trantuandanh95@gmail.com'
    }
    return(
    //Khung trang lớn
    <div style={{display:'flex', backgroundColor:'#E5E5E5', height:'600px', flexDirection:'column'}}>
        {/* Nữa phần trên */}
        <div style={{display:'flex', height:'40%', }}
             className={`${classes.spaceHeader}`}>
            {/* Trên bên trái 2 bảng*/}
            <div style={{display:'flex', flex:'4.5', flexDirection:'column'}}
                 className={`${classes.spaceRight} `}>
                {/* Bảng trên */}
                <div style={{display:'flex', flexGrow:'1', flexDirection:'column'}}
                    className={`${classes.borderBotton} `}>
                    {/* Header chia làm 2*/}
                    <div style={{display:'flex', backgroundColor:'#D8D8D8'}}>
                        {/* Header bên trái chia làm 2*/}
                        <div style={{display:'flex',flex:'1', justifyContent:'space-between'}}>
                            <Typography className={`${classes.textHeader} ${classes.pale}`}>
                                Số hợp đồng
                            </Typography>
                            <Typography className={`${classes.textHeader} ${classes.dark}`}>
                                {numberContract}
                            </Typography>
                        </div>
                        {/* Header bên phải chia làm 2*/}
                        <div style={{display:'flex',flex:'1'}}>
                            <div style={{flex:1}}>
                                <FileCopyIcon color='secondary'/>
                            </div>
                            <div style={{display:'flex',flex:1}}>
                                <CheckCircleOutlineIcon color='secondary'/>
                                <Typography className={`${classes.textHeader} ${classes.secondary}`}>
                                    Hiệu lực
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* Body chia làm 2 bên*/}
                    <div style={{display:'flex', backgroundColor:'#FFFFFF',}}>
                        {/* Nữa trái theo cặp typo*/}
                        <div style={{flex:1}}>
                            <div>
                                <Typography className={`${classes.textReq}`}>
                                    Họ Tên
                                </Typography>
                                <Typography className={`${classes.textRes}`}>
                                    {obPerson.name}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={`${classes.textReq}`}>
                                    Số điện thoại
                                </Typography>
                                <Typography className={`${classes.textRes}`}>
                                    {obPerson.phone}
                                </Typography>
                            </div>
                        </div>
                        {/* Nữa phải theo cặp typo*/}
                        <div style={{flex:1}}>
                                <Typography className={`${classes.textReq}`}>
                                    Email
                                </Typography>
                                <Typography className={`${classes.textRes}`}>
                                    {obPerson.email}
                                </Typography>
                        </div>
                    </div>
                </div>
                {/* Bảng dưới */}
                <div style={{display:'flex', flexGrow:'1', backgroundColor:'red',}}
                    className={`${classes.sapeTop} ${classes.border}`}>
                    b duoi
                </div>
            </div>
            {/* Trên bên phải */}
            <div style={{display:'flex', flex:'5.5', backgroundColor:'lawngreen'}}
                 className={`${classes.spaceLeft} ${classes.border}`}>
                {/* Trên bên phải 1 bảng*/}
                Trên bên phải 1 bảng
            </div>
        </div>

        {/* Nữa phần dưới */}
        <div style={{display:'flex', height:'40%'}}
             className={`${classes.sapeTop}`}>
            {/* Dưới bên trái 2 bảng*/}
            <div style={{display:'flex', flex:'5.5',  flexDirection:'column',}}
                 className={`${classes.spaceRight}`}>
                {/* Bảng trên */}
                <div style={{display:'flex', backgroundColor:'burlywood', flexGrow:1.2}}
                    className={`${classes.border}`}>
                    tren
                </div>
                {/* Bảng dưới */}
                <div style={{display:'flex', backgroundColor:'cadetblue', flexGrow:1.8}}
                     className={`${classes.sapeTop} ${classes.border}`}>
                    duoi ne
                </div>
            </div>

            {/* Dưới bên phải 2 bảng*/}
            <div style={{display:'flex', flex:'4.5',  flexDirection:'column',}}
                 className={`${classes.spaceLeft}`}>
                {/* Bảng trên */}
                <div style={{display:'flex', backgroundColor:'burlywood', flexGrow:1.8}}
                    className={`${classes.border}`}>
                    tren
                </div>
                {/* Bảng dưới */}
                <div style={{display:'flex', backgroundColor:'cadetblue', flexGrow:1.2}}
                     className={`${classes.sapeTop} ${classes.border}`}>
                    duoi ne
                </div>
            </div>
        </div>
    </div>    
    
    )
}