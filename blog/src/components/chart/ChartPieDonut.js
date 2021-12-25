import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";



export default function ChartPie(){
    const options = {
        series : [3,3,3,4],
        labels: ['Chờ duyệt', 'Đang làm', 'Từ chối', 'Đã duyệt'],
        colors: ['#3f51b5','#aa00ff','#1de9b6','#cddc39'],
        plotOptions:{
            pie:{
                expandOnClick: false,
                donut:{
                    size: '60px',
                    labels:{
                        show: true,
                        
                        total:{
                            show: true,
                            showAlways: true,
                            fontSize: '14px',
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
            position: 'bottom',
        }
    }
    const series = [3,3,3,4]
    return(
        <div>
            Biểu đồ tròn
            <Grid item xs={12} md={12}>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="50%"
                    height={300}
                />
            </Grid>
        </div>
    )
}