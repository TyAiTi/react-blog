import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";



export default function ChartPie(){
    const options = {
        
        labels: ['mục 1', 'Đang làm', 'Từ chối', 'Đã duyệt'],
        colors: ['#3f51b5','#aa00ff','#1de9b6','#cddc39'],
        plotOptions:{
            pie:{
                expandOnClick: false,
                donut:{
                    size: '70px',
                    labels:{
                        show: true,
                        
                        total:{
                            show: false,
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
            horizontalAlign: 'center', 
        }
    }
    const series = [3,3,3,4]
    return(
        <div>
            Báo giá sữa chữa
            <Grid item xs={12} md={12} style={{backgroundColor:'pink', height:'400px'}}>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="50%"
                    height={300}
                />
                <div style={{backgroundColor:'yellow', height: '10px', width:'10px', borderRadius:'5px'}}></div>
            </Grid>
        </div>
    )
}