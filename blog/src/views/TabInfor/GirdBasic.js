
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const useStyles2 = makeStyles( (theme)=>({
    root: {
      flexGrow: 1,
      backgroundColor:'#E5E5E5',
      padding:'8.5%'
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
    framecontent:{
        // backgroundColor:'pink',
        marginTop: '10px',
        paddingBottom: '8px',
        paddingTop:'8px'
    },
    textHeader:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
        marginLeft:'8px'
    },
    textReq:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'14px',
        color: '#8A939F',
        marginLeft:'8px'
    },
    textRes:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'16px',
        color: '#323C4A',
        marginLeft:'8px'
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
  }))
export default function GridBasic(){
    const classes2 = useStyles2()
    return(
        <div className={classes2.root}>
            <Grid container spacing={0} className={classes2.container}>
                {/* Bên trái 3 bảng */}
                <Grid container item sx={12} md={5} className={classes2.left}>
                    {/* Bảng trên */}
                    <Grid container item sx={12} md={12} className={classes2.tabletop}>
                        <Grid container item sx={12} md={12} className={classes2.framecontent}>
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
                                    ICON
                                </Typography>
                            </Grid>
                            <Grid item sx={12} md={3}>
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
                    <Grid container item sx={12} md={12} className={classes2.tabledown} >
                        <Grid item sx={12} md={12} className={classes2.framecontent}>
                            <Typography className={classes2.textHeader}>
                                Thông tin Hủy
                            </Typography>
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
                        <Grid item sx={12} md={12} style={{marginBottom:'400px'}}>
                            {/* Khoảng giữa cho các Table */}
                        </Grid>
                    </Grid>

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
                        <Grid item sx={12} md={12} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Số ngày hiệu lực còn lại
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textRes}>
                                   ----------------- 30 ngày
                                </Typography>
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
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Khoảng cách cho footer */}
                        </Grid>
                    </Grid>


                    {/* Bảng dưới */}
                    <Grid container item sx={12} md={12} className={classes2.tabledown}>
                        <Grid item sx={12} md={12} className={classes2.framecontent}>
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
                                <Typography className={classes2.textReqNon}>
                                    Giám định vỡ màn hình
                                </Typography>
                                </Grid>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textResNon}>
                                    Không
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
                                <Typography className={classes2.textResNon}>
                                    Không vỡ
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
                        
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Khoảng cách giữa trên ảnh */}
                        </Grid>

                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReq}>
                                    Ảnh OCR
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sx={12} md={4} className={classes2.framecontent}>
                            <Grid item sx={12} md={12}>
                                <Typography className={classes2.textReqNon}>
                                    Ảnh AI
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={12} md={12} style={{marginBottom:'20px'}}>
                            {/* Khoảng cách cho footer */}
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}