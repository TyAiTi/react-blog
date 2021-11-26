
import styles from '../../assets/jss/material-kit-react/components/headerStyle.js'
import logo from "../../assets/img/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import s from '../../assets/img/faces'
const useStyles = makeStyles(styles);

const useStyles2 = makeStyles( (theme)=>({ 
    header: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flexWrap: 'nowrap',
        height: '50px',
        alignItems: 'center',
        width: '100%'
    },
    left:{
        flex: '7',
        marginLeft: '4%'
    },
    inside:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    right:{
        flex: 1.5,
        marginRight: '4%',
        display: 'flex'
    },
    name:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px'
    },
    arrow:{
        marginRight: '1%'
    }
}))

export default function Header(){
    const classes = useStyles();
    const classes2 = useStyles2();

    return(
        <div className={classes2.header}>
            <div className={classes2.left}>
                <img
                    className={classes.logo}
                    src={logo}
                    title="BAOHIEMSO"
                />
            </div>
            <div className={classes2.inside}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                
            </div>
            <div className={classes2.right}>
                <div>
                    <Avatar
                        alt="Remy Sharp"
                        src="http://localhost/react-blog/blog/src/assets/img/faces/marc.jpg"
                        sx={{ width: 35, height: 35 }}
                    />
                </div>
                
                <div className={classes2.name}>
                    Danh Tuan
                </div>
            </div>
            <div className={classes2.arrow}>
                <ArrowDropDownIcon />
            </div>
        </div>
    )
}