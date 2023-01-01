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



class Comparison extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        d:[]
        
        
        
      };
    }
    componentDidMount() {
    
        console.log("Componenet comparison mounts")
        
    }
    

    render(){
      let {d} = this.state
      let dt = this.props.data

        
  
        let data = {
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
  
      
  
      let lbl = []
      let dset = []
      let g = 0
      let t = 0
  
        dt.map((dat)=>{
          let lb=[]
          let i = 0
          let price = []
          
          
          let data1={label:'', data: [], borderColor:'', backgroundColor: ''}
          
           
           dat.p.map((p)=>{
            lb.push(i.toString())
             let pr = p.price.replace(/[BDT|Tk|'As low as '|\n|' '|'was ']/g, '')
             price.push(parseInt(pr.replace(/,/g, '')))
            i++
            t++
           })
           console.log(t)
  
  
           if(lb.length > lbl.length)
             lbl = lb
            
             console.log(dat.name) 
             
           data1.label = dat.name 
           data1.data = price.sort()
           data1.borderColor = 'rgb(204,'+g+', 132)' 
           data1.backgroundColor = 'rgb(204,'+g+', 132)'
           g= 9+g
            g>255? g=g-255:g=g+100
           console.log(data1.data)
           
  
           d.push(data1)
           console.log(d)
  
           console.log(lbl)
           console.log(dset)
          
        })
        
        
        let da = {labels:lbl, datasets:d}
      
        
        
        console.log(da)
        return(
            <div className="w-full relative mx-auto text-gray-600 max-w-screen-lg">
                <Line options={options} data={da} />;
            </div>
        )
    }
}
export default Comparison;