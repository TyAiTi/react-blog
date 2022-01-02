import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

//3 icon
import WarningIcon from '@material-ui/icons/Warning';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles( ()=>({
    root:{
        padding: '4%',
        width: 'auto',
        height: 'auto'
    },
    top:{
        // borderTopRightRadius: '5px',
        // borderTopLeftRadius:'5px',
        // boxShadow: '0 0 5px 0 #616161',
        height: '300px',
        backgroundColor:'pink'
    }

}))

export default function ChartSquares2(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {/* top */}
            <div className={classes.top}>

            </div>

            {/* down */}
            <div>

            </div>
        </div>
    )
}