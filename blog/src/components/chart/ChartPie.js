import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( ()=>({
    content:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
        marginLeft:'16px'
    },
}))

export default function ChartPie(){
    const classes = useStyles()
    const options = {
        
        labels: ['Hãng xử lý sữa chữa',
                 'Hãng sữa chữa bảo hành', 
                 'BH ử lý cho đổi máy mới', 
                 'ASC từ chối yêu cầu',
                 'Hãng không sữa và trả máy',
                 'Hãng xử lý sữa chữa'],
        plotOptions:{
            pie:{
                expandOnClick: false,
                donut:{
                    size: '14px',
                    labels:{
                        show: true,
                        total:{
                            show: false,
                            showAlways: true,
                            fontSide: '24px',
                            color: 'red'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
          },
        legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'center', 
        }
    }
    const series = [3,3,3,5,3,4]
    return(
        <div style={{height:'405px'}}>
            <Typography className={classes.content}>
                Hướng xử lý YCBT
            </Typography>
            
            <Grid item xs={12} md={12}>
                <Chart
                    options={options}
                    series={series}
                    type="pie"
                    width="100%"
                    height={300}
                />
            </Grid>
        </div>
    )
}