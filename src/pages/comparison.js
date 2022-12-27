import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import  { faker }  from "@faker-js/faker";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Price comparison chart',
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,700,4,5,8,100],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(253, 162, 35, 0.5)',
      },
    ],
};

class Comparison extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        d:'',
        
      };
    }
    componentDidMount() {
    
        console.log("Componenet comparison mounts")
        
    }
    processData(dt){
      dt.map((dat)=>{
        let lb=[]
        let i = 0
        let price = []
        
         console.log(dat)
         dat.p.map((p)=>{
          lb.push(i)
           let pr = p.price.replace(/['BDT'|'TK']/, '')
           price.push(pr)
          i++
         })
         console.log(lb)
         console.log(price)

      })
    }

    render(){
        
        this.processData(this.props.data)
        console.log(data.datasets[0].data)
        return(
            <div className="w-full relative mx-auto text-gray-600 max-w-screen-lg">
                <Line options={options} data={data} />;
            </div>
        )
    }
}
export default Comparison;