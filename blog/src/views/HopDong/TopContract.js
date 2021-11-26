// import styles from "./topcontract.module.css"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CustomButton from "../../components/button/CustomButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme)=>({
    top:{
        height: '40px',
        display: 'flex',
        alignItems: 'center'
    },
    down:{
        height: '65px',
        display: 'flex',
        alignItems: 'center'
    },
    topleft:{
        flex: 8.5
    },
    topright:{
        flex: 2,
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));
export default function TopContract(){
    const inforContract = "#0201 - 1234"
    const classes = useStyles();
    return(
        <div >
            <div className={classes.top}>ALT Dashboard {'>'} Quản Lý Hợp Đồng
                 {' >'} Thông tin hợp đồng {inforContract}
             </div>
             <div className={classes.down}>
                 <div className={classes.topleft}>
                    <Typography variant="h3">
                        Thông tin hợp đồng {inforContract}
                    </Typography>
                 </div>
                 <div className={classes.topright}>
                     <Stack direction="row">
                        <CustomButton>Tạo YCBT</CustomButton>
                        <CustomButton>icon</CustomButton>
                    </Stack>
                 </div>
                
            </div>
        </div>
    )
}