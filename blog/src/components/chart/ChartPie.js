import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import Chart from "react-apexcharts";



export default function ChartPie(){
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
    }
    const series = [3,3,3,5,3]
    return(
        <div>
            Hướng xử lý YCBT
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