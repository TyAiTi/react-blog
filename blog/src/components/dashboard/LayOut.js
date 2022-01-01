import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ChartArea from '../chart/ChartArea';
import ChartPie from '../chart/ChartPie';
import ChartPieDonut from '../chart/ChartPieDonut'
const useStyles = makeStyles( ()=>({
    root: {
        padding: '4%',
        // backgroundColor: 'pink'
    },
    top:{
        // backgroundColor: 'pink'
    },
    down:{
        // backgroundColor: 'green',
        marginTop: '20px'
    },
    left:{
        backgroundColor:'pink',
    },
    right:{
        backgroundColor:'gray'
    },
    case1:{
        // backgroundColor:'yellow',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
        height: 'auto'
    },
    case2:{
        // backgroundColor:'pink',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
    },
    case3:{
        backgroundColor:'pink',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
    },
    case4:{
        backgroundColor:'yellow',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 #616161',
        height: '300px'
    }
}))
export default function Layout(){
    const classess = useStyles()

    return(
        <div className={classess.root} >
            {/* Phần trên */}
            <Grid container item sx={12} className={classess.top} >
                {/* Trái */}
                <Grid item sx={12} md={9}  style={{ backgroundColor:'pink'}}>
                    <Grid  className={classess.case1} >
                        {/* Trái */}
                        <ChartArea/>
                    </Grid>
                </Grid>
                {/* Phải */}
                <Grid item sx={12} md={3} className={classess.case2}>
                    {/* Phải */}
                    {/* <ChartArea/> */}
                    <ChartPieDonut/>
                    {/* <ChartPie/> */}
                </Grid>
            </Grid>

            {/* Phần dưới */}
            <Grid container item sx={12} className={classess.down} >
                {/* Trái */}
                <Grid item sx={12} md={7} className={classess.case3}>
                    Trái
                </Grid>
                {/* Phải */}
                <Grid item sx={12} md={5}  style={{paddingLeft:'20px'}}>
                    <Grid item sx className={classess.case4} >
                        TrONG Phải
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}