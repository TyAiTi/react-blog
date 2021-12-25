import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";



export default function ChartPie(){
    const options = {
        
        labels: ['Chờ duyệt', 'Đang làm', 'Từ chối', 'Đã duyệt'],
        plotOptions:{
            pie:{
                expandOnClick: false,
                donut:{
                    size: '14px',
                    labels:{
                        show: true,
                        total:{
                            show: true,
                            showAlways: true,
                            fontSide: '24px',
                            color: 'red'
                        }
                    }
                }
            }
        }
        
    }
    const series = [3,3,3,5]
    return(
        <div>
            Biểu đồ tròn
            <Grid item xs={12} md={12}>
                <Chart
                    options={options}
                    series={series}
                    type="pie"
                    width="50%"
                    height={300}
                />
            </Grid>
        </div>
    )
}