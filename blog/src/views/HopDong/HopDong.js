import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

import TabMui from './Tab';
import TopContract from './TopContract';

const useStyles = makeStyles( (theme)=>({ 
    root: {
        backgroundColor: '#EEF1F5'
    },
    space: {
        marginLeft: '4%',
        marginRight: '4%'
    }
}))
export default function HopDong(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Header/>
            <div className={classes.space}>
                <TopContract/>
                <TabMui/>
            </div>
        </div>
    )
}