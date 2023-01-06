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
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import { Doughnut, Bar, Pie } from 'react-chartjs-2';



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
      datalabels: {
        display: true,
        color: "#000910",
        align: "start",
        anchor: "middle",
        offset: -15,
        font: { size: "15" }
      },
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Number of products showing \n in First page',
        font: { size: "15" }
      },
    },
  };

  const aOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        display: true,
        color: "#000910",
        align: "start",
        anchor: "middle",
        offset: -15,
        font: { size: "15" }
      },
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Average product price in first page',
        font: { size: "15" }
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "start",
        anchor: "end",
        offset: -20,
        font: { size: "10" }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
      legend: {
        display: 'true',
        position:'bottom'
      },
      title: {
        display: true,
        text: 'Heighest & Lowest Price \n in First Page',
        font: { size: "14" }
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
        let bsetH = []
        let bsetL = []
        let bgcolor = []
        let  avg = []

      
        let g = 0
        let p = 0
        d = dt

        d.map((dat)=>{
           lbl.push(dat.name)    

           let n = dat.p.length
           dset.push(n)
           let b = 255-g

           let pr = []

           dat.p.map((de)=>{
              let pc = de.price.replace(/[BDT|Tk|'As low as '|\n|' '|'was ']/g, '')
              
              if(pc!=='')
                 pr.push(parseInt(pc.replace(/[,|' ']/g, '')))
           })
           console.log(pr.length)
           
           if(pr.length!==0){
            bsetH.push(Math.max(...pr))
            bsetL.push(Math.min(...pr))
            const average =Math.floor(pr.reduce((a, c) => a + c) / pr.length)
            avg.push(average)
            const hashmap = pr.reduce( (acc, val) => {
              acc[val] = (acc[val] || 0 ) + 1
              return acc
           },{})
           console.log(hashmap)
           console.log(Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b))
           }
           else{
            bsetH.push('No Products')
            bsetL.push('No Products') 
           }
           console.log('Average', avg)
           bgcolor.push('rgb(140,'+g+','+b+')')

            g>255? g=g-255:g=g+80
        
        
        
         })

       const dta = {labels:lbl, datasets:[{data:dset, backgroundColor:bgcolor,hoverBackgroundColor:bgcolor }]} 

       const bdta = {labels:lbl, datasets:[{label:"Heighest Price",data:bsetH, backgroundColor:'rgba(25,99,98,0.8)',borderColor: 'rgba(255,99,132,1)',borderWidth: 1,
       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
       hoverBorderColor: 'rgba(255,99,132,1)' },{label:"Lowest Price",data:bsetL, backgroundColor:'rgba(75,36,69,0.8)',borderColor: 'rgba(255,99,132,1)',borderWidth: 1,
       hoverBackgroundColor: 'rgba(195,99,132,0.6)',
       hoverBorderColor: 'rgba(255,99,132,1)' }
       ]} 
       const pdata = {labels:lbl,datasets:[{
        label: 'Average Price',
        data:avg, backgroundColor:bgcolor, borderWidth: 1
       }]}


        return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-16 text-center"> 
            
            <div className="container w-82 text-gray-600 h-82">
            <Doughnut width={20}
          height={20} options={options} data={dta} plugins={[ChartDataLabels]} />
          </div>
          <div className="container w-96 text-gray-600 h-fit">
            <Bar data={bdta} width={300} height={300} options={barOptions} plugins={[ChartDataLabels]} />
          </div>
          <div className="container w-96 text-gray-600 h-fit">
            <Pie data={pdata} width={300} height={300} options={aOptions} plugins={[ChartDataLabels]}  />
          </div>
        </div>    
        )
    }
}
export default Rept;