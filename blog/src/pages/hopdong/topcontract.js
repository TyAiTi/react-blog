import styles from "./topcontract.module.css"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CustomButton from "../../components/button/CustomButton";
export default function TopContract(){
    const inforContract = "#0201 - 1234"
    return(
        <div >
            <div className={styles.top}>ALT Dashboard {'>'} Quản Lý Hợp Đồng
                 {' >'} Thông tin hợp đồng {inforContract}
             </div>
             <div className={styles.down}>
                 <div className={styles.topleft}>
                    <Typography variant="h3">
                        Thông tin hợp đồng {inforContract}
                    </Typography>
                 </div>
                 <div className={styles.topright}>
                     <Stack direction="row">
                        <CustomButton>Tạo YCBT</CustomButton>
                        <CustomButton>icon</CustomButton>
                    </Stack>
                 </div>
                
            </div>
        </div>
    )
}