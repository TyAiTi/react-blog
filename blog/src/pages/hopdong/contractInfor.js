import s from './hopdong.module.css'
import { useState } from 'react'

export default function ContractInfor(){
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
return(
    <div className={s.container}>
        <div className={s.header}>
            <div className={s.h_left}>
                <h4>BAOHIEMSO.AI</h4>
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
                                <p className={` ${s.space_left}`}> Số hợp đồng</p> 
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
                            <p className={` ${s.space_left}`}>Tên thiết bị</p>  <p className={`${s.space_left} ${s.text_b}`}>{inforDevice.name}</p>
                            <p className={` ${s.space_left}`}>Loại thiết bị</p> <p className={`${s.space_left} ${s.text_b}`}>{inforDevice.type}</p>
                        </div>
                        <div className={s.body_d_l_right}>
                            <div className={s.body_d_l_l_header}>
                                    <p className={` ${s.space_left}`}></p>
                            </div>
                            <p>Nhà sản xuất thiết bị</p><p className={`${s.space_left} ${s.text_b}`}>{inforDevice.nxs}</p>
                            <p>IMEI</p><p className={`${s.space_left} ${s.text_b}`}>{inforDevice.imei}</p>
                        </div>
                    </div>
                </div>
                <div className={s.body_d_right}>
                     
                    <div className={s.body_d_r_left}>
                        <p>Thông tin giá trị</p>
                        <p>Đơn vị bán hàng</p>
                    </div>
                    <div className={s.body_d_r_right}><br/>Cty bảo hiểm</div>
                </div>
            </div>
        </div>
        
    </div>
)
}