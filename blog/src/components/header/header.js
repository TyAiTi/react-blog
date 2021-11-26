
import styles from '../../assets/jss/material-kit-react/components/headerStyle.js'
import logo from "../../assets/img/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import styles_h from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import s from '../../assets/img/faces'
const useStyles = makeStyles(styles);

export default function Header(){
    const classes = useStyles();

    return(
        <div className={styles_h.header}>
            <div className={styles_h.left}>
                <img
                    className={classes.logo}
                    src={logo}
                    title="BAOHIEMSO"
                />
            </div>
            <div className={styles_h.inside}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                
            </div>
            <div className={styles_h.right}>
                <div>
                    <Avatar
                        alt="Remy Sharp"
                        src="http://localhost/react-blog/blog/src/assets/img/faces/marc.jpg"
                        sx={{ width: 35, height: 35 }}
                    />
                </div>
                
                <div className={styles_h.name}>
                    Danh Tuan
                </div>
            </div>
            <div className={styles_h.arrow}>
                <ArrowDropDownIcon />
            </div>
        </div>
    )
}