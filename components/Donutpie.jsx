import React from 'react'
import '../styles/compchart.css'

import { Chart as ChartJs, ArcElement,  Tooltip, Legend } from 'chart.js'

import { Doughnut } from 'react-chartjs-2';





ChartJs.register(ArcElement  ,Tooltip, Legend)
const Donutpie = () => {


    const data = {
        labels:['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets:[{
            label:'Polls',
            data:[6,3,3],
            backgroundColor:['#98D89E', '#F6DC7D','#EE8484'],
            borderColor: ['#98D89E', '#F6DC7D','#EE8484'],
            borderRadius: 20,
            spacing: -10,


        }],

    }

    const options ={
        cutout:'83%',
        plugins: {
            legend: {
              display:false,
            },
          },

    }

  return (
    <div className='w-[150px]'>
        <Doughnut
        
        data={data}
        options={options}
        >

        </Doughnut>
    </div>
  )
}

export default Donutpie