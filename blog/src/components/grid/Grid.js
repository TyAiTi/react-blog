
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
//import 7 Component
import NumberContract from './NumberContract';
import InforDevice from './InforDevice';
import InforValue from './InforValue';
import Duration from './Duration'
import InforCancel from './InforCancel';
import InforStaff from './InofrStaff';
import InforCreate from './InforCreate';
const useStyles = makeStyles( (theme)=>({
  root: {
    flexGrow: 1,
    width: 'auto',
    // height: '600px',
    backgroundColor:'#EEF1F5',
  },
  dong:{
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(0),
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 black',
    marginTop: '20px',
    marginBottom: '20px',
    marginRight:'20px'
  },
  tay:{
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(0),
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 black',
    marginTop: '20px',
    marginBottom: '20px',
  },
  nam:{
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(0),
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 #616161',
    marginTop: '20px',
    marginBottom: '20px',
    marginRight:'20px'
  },
  duraion:{
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(0),
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 #616161',
  },
  left:{
    // backgroundColor: '#ad1457',
    padding: theme.spacing(0),
  },
  leftDown:{
    // backgroundColor: '#ad1457',
    padding: theme.spacing(0),
  },
  rightDown:{
    // backgroundColor: '#ad1457',
    padding: theme.spacing(0),
  },
  right:{
    backgroundColor: '#2196f3',
    padding: theme.spacing(0),
  },
  top:{
    backgroundColor: '#b2dfdb',
    padding: theme.spacing(0),
    
  },

}))

export default function BasicGrid(){
  const classes = useStyles()
  const obNumberContract = {
    number: '345765767',
    name: 'Tuấn Danh',
    phone: '0989698237',
    email: 'tuandanh952@gmail.com'
  }
  const obInforDevice = {
    name: 'VIVO 1910',
    type: 'Smartphone',
    madein: 'VIVO',
    imei: 869150051012733
  }
  const obInforValue = {
    saleunit: 'Công ty Cổ Phần Thế Giới Di Động',
    price: '4,990,000 VND',
    costbefor: '1,990,000 VNĐ',
    compensation: '0',
    timeexport: '-',
    nameinsure: 'PVI_Bảo hiểm rơi vỡ',
    companyinsure: 'CÔNG TY BẢO HIỂM PVI PHÍA NAM',
    costafter: '1,990,000 VNĐ',
    times: '4',
    moneyexist: '11,350,000 VNĐ',
    exportcontract: '11/10/2021 00:00'
  }
  const obDuration = {
    datestart: '11/10/2021 00:00',
    dateend: '11/10/2021 00:00',
    availability: '30 Ngày'
  }
  const obCancel = {
    personcancel: '-',
    giveback: '-',
    idstaff: '-',
    namestaff: '-',
    insurancebefore: '-',
    insuranceafter: '-',
    datecancel:'-',
    dateend:'-',
    notecancel: '-'
  }
  const obStaff = {
    idstaffsale: '04343GH',
    namestaff: 'Lưu Thế Vinh',
    manforcontract: 'Mã Văn Tài',
    storeexport: 'TGDD quận 1',
    note: 'Khách hàng yêu cầu xuất hóa đơn'
  }
  const obCreate = {
    TPA: '-',
    personcreate: 'Mã Văn Tài',
    datecreate: '11/10/2021 15:00',
    personupdate: 'Thế giới di động',
    dateupdate: '11/10/2021 15:23'
  }
  return(
    <div className={`${classes.root}`}>
        <Grid container spacing={0}>
          {/* Nữa trên 2 Grid lớn trái-phải*/}
          <Grid item xs={6} className={`${classes.left}`} >
            {/* Bên trái chia làm 2 Gird trên dưới */}
            <Grid className={`${classes.dong}`}>
                <NumberContract props={obNumberContract}/>
            </Grid>
            <Grid className={`${classes.nam}`}>
                <InforDevice props={obInforDevice}/>
            </Grid>
          </Grid>
          <Grid item xs={6}  className={`${classes.tay}`}>
                <InforValue props={obInforValue}/>
          </Grid>
          
          {/* Nữa dưới 2 Grid lớn trái-phải*/}
          <Grid item xs={7} className={`${classes.rightDown}`} >
              {/* Thời hạn */}
              <Grid className={`${classes.dong}`}>
                <Duration props={obDuration}/>
              </Grid>
              {/* Thông tin hủy */}
              <Grid className={`${classes.nam}`}>
                <InforCancel props={obCancel}/>
              </Grid>
          </Grid>
          <Grid item xs={5} className={`${classes.rightDown}`} >
              {/* Thông tin nhân viên */}
              <Grid className={`${classes.tay}`}>
                <InforStaff props={obStaff}/>
              </Grid>
              {/* Thông tin khởi tạo */}
              <Grid className={`${classes.tay}`}>
                <InforCreate props={obCreate}/>
              </Grid>
          </Grid>
            
        </Grid>
    </div>
  )
}