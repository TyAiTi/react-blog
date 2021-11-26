import s from './hopdong.module.css'
// import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/headerStyle.js"
import logo from "../../assets/img/logo.svg";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles(styles);
export default function ContractInfor(){
    const classes = useStyles();
    const inforContract = "#0201 - 1234"
    const obContract = {
        id: 345765767,
        name: "Tuấn Danh",
        phone: "0989698237",
        email: "trantuandanh95@gmail.com"
    }
    const inforDevice = {
        name: "VIVO 1910",
        type: "Smartphone",
        nsx: "VIVO",
        imei: "869150051012733"
    }
    const inforValue = {
        dvbh: "Công ty Cổ Phần Thế Giới Di Động",
        price: "4,990,000",
        aftervat: "1,990,000",
        stbt: 0,
        namebh: "PVI_Bảo hiểm rơi vỡ",
        namecty: "CÔNG TY BẢO HIỂM PVI PHÍA NAM",
        cost: "1,990,000",
        times: 4,
        balance: "11,135,000",
        timecontract: "10/11/2021 00:00"
    }
return(
    <div className={s.container}>
        <div className={s.header}>
            <div className={s.h_left}>
                <img
                    className={classes.logo}
                    src={logo}
                    title="BAOHIEMSO"
                />
                
            </div>
            <div className={s.h_inside}>
            <h4>Nút</h4>
            </div>
            <div className={s.h_right}>Danh Tuan</div>
            
        </div>
        <div className={s.body}>
            <div className={s.body_top}>
                <div className={s.body_top1}>ALT Dashboard {'>'} Quản Lý Hợp Đồng
                 {' >'} Thông tin hợp đồng {inforContract}
                </div>
                <div className={s.body_top2}>
                    <div className={s.body_top2_left}>Thông tin hợp đồng {inforContract}</div>
                    <div className={s.body_top2_right}>Tạo YCBT</div>
                    <div className={s.body_top2_right}>Print</div>
                </div>
                <div className={s.body_top3}>
                    <div className={s.body_top3_left}>Thông tin hợp đồng </div>
                        <div className={s.body_top3_right}>Lịch sử YCBT</div>
                    </div>
            </div>
            <div className={s.body_down}>
                <div className={s.body_d_left}>
                    <div className={s.body_d_l_top}>
                        <div className={s.body_d_l_left}>
                            <div className={s.body_d_l_l_header}>
                                <p className={` ${s.space_left} ${s.text_b}`}> Số hợp đồng</p> 
                                <p className={`${s.text_b} `}>{obContract.id}</p>
                            </div>
                          
                           <p className={` ${s.space_left}`}> Họ tên</p>         <p className={`${s.text_b} ${s.space_left}`}>{obContract.name}</p>
                           <p className={` ${s.space_left}`}> Số điện thoại</p>  <p className={`${s.text_b} ${s.space_left}`}>{obContract.phone}</p>
                        </div>
                        <div className={s.body_d_l_right}>
                            <div className={s.body_d_l_l_header}>
                                <p className={` ${s.space_left}`}> Coppy</p> 
                                <p className={`${s.text_b} ${s.space_right}`}>Hiệu lực</p>
                            </div>
                           <p>Email</p> <p className={s.text_b}>{obContract.email}</p>
                        </div>
                    </div>
                    <div className={s.body_d_l_down}>
                        <div className={s.body_d_l_left}>
                            <div className={s.body_d_l_l_header}>
                                    <p className={` ${s.space_left}`}> Thông tin thiết bị</p>
                            </div>
                            <p className={` ${s.space_left}`}>Tên thiết bị</p>
                            <p className={`${s.space_left} ${s.text_b}`}>{inforDevice.name}</p>  
                            <p className={` ${s.space_left}`}>Loại thiết bị</p> 
                            <p className={`${s.space_left} ${s.text_b}`}>{inforDevice.type}</p>
                        </div>
                        <div className={s.body_d_l_right}>
                            <div className={s.body_d_l_l_header}>
                                    <p className={` ${s.space_left}`}></p>
                            </div>
                            <p>Nhà sản xuất thiết bị</p>
                            <p className={`${s.space_left} ${s.text_b}`}>{inforDevice.nxs}</p>
                            <p>IMEI</p>
                            <p className={`${s.text_b}`}>{inforDevice.imei}</p>
                        </div>
                    </div>
                </div>
                <div className={s.body_d_right}>       
                    <div className={s.body_d_r_left}>
                        <div className={s.body_d_l_l_header}>
                                <p className={`${s.space_left} ${s.text_b}`}> Thông tin giá trị</p> 
                        </div>
                        <p className={`${s.space_left}`}>Đơn vị bán hàng</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.dvbh}</p>
                        <p className={`${s.space_left}`}>Giá bán sản phẩm</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.price}</p>
                        <p className={`${s.space_left}`}>Phí bảo hiểm sau thuế</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.aftervat}</p>
                        <p className={`${s.space_left}`}>Số tiền bồi thường </p>
                        <p className={`${s.space_left} ${s.text_b}`}>0</p>
                        <p className={`${s.space_left}`}>Thời gian xuất bán</p>
                        <p className={`${s.space_left} ${s.text_b}`}>-</p>
                        <p className={`${s.space_left}`}>Tên gói bảo hiểm</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.namebh}</p>
                    </div>
                    <div className={s.body_d_r_right}>
                        <div className={s.body_d_l_l_header}>                                
                        </div>
                        <p className={`${s.space_left}`}>Cty bảo hiểm</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.namecty}</p>
                        <p className={`${s.space_left}`}>Phí bảo hiểm trước thuế</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.cost}</p>
                        <p className={`${s.space_left}`}>Số lần bồi thường</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.times}</p>
                        <p className={`${s.space_left}`}>Số tiền bảo hiểm còn lại</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.balance}</p>
                        <p className={`${s.space_left}`}>Ngày xuất hợp đồng</p>
                        <p className={`${s.space_left} ${s.text_b}`}>{inforValue.timecontract}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
}