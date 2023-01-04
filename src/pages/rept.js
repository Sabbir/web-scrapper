import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarController,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Number of products showing \n in First page',
      },
    },
  };

  class Rept extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        d:[]
        
        
        
      };
    }
    componentDidMount() {
    
        console.log("Componenet report mounts")
        
    }
    

    render(){
        let {d} = this.state
        let dt = this.props.data

        

        let lbl = []
        let dset = []
        let bset = []
        let bgcolor = []

      
        let g = 0
        console.log(dt)
        d = dt

        d.map((dat)=>{
           lbl.push(dat.name)    

           let n = dat.p.length
           dset.push(n)
           let b = 255-g

           let pr = []

           dat.p.map((de)=>{
              let pc = de.price.replace(/[BDT|Tk|'As low as '|\n|' '|'was ']/g, '')
              pr.push(parseInt(pc.replace(/[,|' ']/g, '')))
           })

           bset.push(Math.max(...pr))

           bgcolor.push('rgb(140,'+g+','+b+')')

            g>255? g=g-255:g=g+80
        
        
        
         })

       const dta = {labels:lbl, datasets:[{data:dset, backgroundColor:bgcolor,hoverBackgroundColor:bgcolor }]} 

       const bdta = {labels:lbl, datasets:[{label:"Maximum Price",data:bset, backgroundColor:'rgba(25,99,88,0.8)',borderColor: 'rgba(255,99,132,1)',borderWidth: 1,
       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
       hoverBorderColor: 'rgba(255,99,132,1)' }]} 


        return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-16 text-center"> 
            
            <div className="container w-80 text-gray-600 h-72">
            <Doughnut width={10}
          height={10} options={options} data={dta} />
          </div>
          <div className="container w-112 text-gray-600 h-fit">
            <Bar data={bdta} width={550} height={550} options={{
            maintainAspectRatio: true,title: {
              display: true,
              text: 'Maximum',
            }
          }} />
          </div>
        </div>    
        )
    }
}
export default Rept;