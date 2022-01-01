import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( ()=>({
    content:{
        fontFamily:'Roboto',
        fontSize:'18px',
        fontWeight:'bold',
        marginLeft: '16px'
    },
}))

export default function ChartArea(){
    const classes = useStyles()
    const options =   {
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#FACA9B','#54DE7E'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'number',
          categories: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        },
        // tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        // },
        legend:{
          show: true,
          position: 'top',
          horizontalAlign:'left'
        }
      }
        

    const series = [{
        name: 'Hoàn thành',
        data: [20, 40, 60, 80, 90, 100, 120, 140, 160, 180]
      }, {
        name: 'Nhận',
        data: [11, 32, 45, 32, 34, 52, 41, 120, 140, 150]
      }]
    return(
        <>
            <Typography className={classes.content}>
                Số lượng nhận và hoàn thành
            </Typography>
            
            <Grid item xs={12} md={12}>
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    width="100%"
                    height={300}
                />
            </Grid>
        </>
    )
}