import React from 'react'
import '../styles/compchart.css'

import { Chart as ChartJs, BarElement, CategoryScale , LinearScale ,Tooltip, Legend } from 'chart.js'

import { Bar } from 'react-chartjs-2';

ChartJs.register(BarElement, CategoryScale , LinearScale ,Tooltip, Legend)

const Compchart = ({mobile}) => {


  const bart = mobile ? 20 : 40 


  const data = {
    labels:[' ','Week 1' , 'Week 2' , 'Week 3', 'Week 4', ''],
    datasets:[
      {
        label: '' ,
        data : [null,500,200,300, 400 ,null,]  ,
        backgroundColor:'#98D89E',
        boredrColor:'black',
        borderWidth: 1,
        borderRadius:5,
        barThickness: bart,
        
      },

      {
        label:'',
        data : [null,300, 400, 200, 300, null, ],
        backgroundColor:'#EE8484',
        boredrColor:'black',
        borderWidth: 1,
        borderRadius:5,
        barThickness: bart,


      }
    ]
  }

  const options = {

    // datasets: {
    //   bar: {
    //     barPercentage: 0.4, 
    //     categoryPercentage: 1 ,
    //   }
    // },

    maintainAspectRatio:false,

    plugins: {
      legend: {
          display: false
      },},
      
      scales:{
        x: {
          offset: false ,

          grid:  {
            display: false
          },

          ticks: {
            color: '#858585a1'
          }

        },

        y: {
          ticks:{

            color:'#858585a1',

            stepSize: 100,
          }

        }
      }


  }
  

  

  
  return (
    <div>

    <div className='w-[325px] h-[162.5px]  sm:w-[860px] sm:h-[300px] '>
      <Bar data={data} options={options}>

      </Bar>
    </div>
    </div>
  )
}

export default Compchart