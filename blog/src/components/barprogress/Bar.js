import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styles from './Bar.module.css'
const useStyles2 = makeStyles( (theme)=>({
    progress: {
        backgroundColor: '#d8d8d8',
        borderRadius: '20px',
        position: 'relative',
        /* margin: 15px 0; */
        height: '7px',
        width: 'auto',
        margin: '0px 20px 0px 16px'
    },
    progress_done : {
        background: 'linear-gradient(to left, #54DE7E, #54DE7E)',
        boxShadow: '0 3px 3px -5px #54DE7E, 0 2px 5px #54DE7E',
        borderRadius: '20px',
        color: '#fff',
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        height: '100%',
        width: '0',
        opacity: '0',
        transition: '1s ease 0.3s'
    }

  }))
export default function Bar(){
    const classes2 = useStyles2()
    const [style, setStyle] = useState({})
    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${"95"}%`
		}
		
		setStyle(newStyle);
	}, 200);
    return(
        <div>
            <div className={classes2.progress}>
                <div className={classes2.progress_done} style={style}>
                    {/* Số % */}
                </div>
		    </div>
        </div>
    )
}