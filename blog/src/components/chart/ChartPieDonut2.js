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

export default function ChartPieDonut2(){
    const classes = useStyles()
    const options = {
        
        labels: ['Chờ Duyệt', 'Đang Làm', 'Từ Chối', 'Đã Duyệt'],
        colors: ['#FACA9B','#54DE7E','#F44336','#0E70C7'],
        plotOptions:{
            pie:{
                expandOnClick: false,
                donut:{
                    size: '70px',
                    labels:{
                        show: false,
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
        show: false,
        position: 'bottom',
        horizontalAlign: 'center', 
        }
    }
    const series = [3,3,3,5,]

    const caption = (options.colors).map( (e, index)=>{
        return(
            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'16px'}}>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <div style={{backgroundColor:e, height: '10px', width:'10px', borderRadius:'5px'}}>
                    </div>
                    <div style={{marginLeft:'16px'}}>
                        {options.labels[index]}
                    </div>
                </div>
                <div style={{marginRight:'16px'}}>
                    25%
                </div>
            </div>
        )
    })
    return(
        <>
            <Typography className={classes.content}>
                Hướng xử lý YCBT
            </Typography>
            
            <Grid item xs={12} md={12}>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height={300}
                />
            </Grid>
            <div style={{marginTop:'16px'}}>
                {caption}
            </div>
            
        </>
    )
}