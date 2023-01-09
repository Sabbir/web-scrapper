import React from 'react';
import { Puff } from  'react-loader-spinner'
import Products from './products';
import Comparison from './comparison';
import Rept from './rept';
import { Disclosure,Transition } from '@headlessui/react'
import ReactJsAlert from "reactjs-alert"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Search', id:1, href: '#', current: true, disb: false, child:[] },
  { name: 'Comparison', id:3, href: '#', current: false, disb: true, child:[] },
  { name: 'Reports',  id:4, href: '#', current: false, disb: true,child:[] },
]

const user = {
  name: 'Sabbir Hossain',
  email: 'sabbirhs@yahoo.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      q:'',
      isSearch: false,
      isLoaded: false,
      products: {},
      msg:"Search for a product",
      type: "info",
      status: false,
      id: 1,
     
    };
  }
  
  componentDidMount() {
    
    console.log("Componenet mounts")
    
    }
    
   
    render(){
      let { q, isSearch, isLoaded, products, msg, type, status, id } = this.state;
      
      if(isSearch){
        
        if(products[0].p[0].price==='ERROR'){
          console.log("found error")
          this.setState({ 
            isSearch:false,
            isLoaded:false,
            products: [],
            msg:"Products not found. Please check the search input \n Or May be a network\server problem "
        }); 
        }
        products.forEach(el => {
               
               console.log(el)
        });
        // ((product) => (

        //   console.log(product)
        // ))
        
      
      }

      const handleTrack = () => {
       
        if (q.length !== 0) {
          this.setState({
            isSearch: false,
            isLoaded:true
          });
          // Do something with value
          console.log("got this:", q);

          getProducts("http://localhost:3010/api/v1/products/"+ q)
          

          
        }
        
      }
      const getProducts=(uri)=>{

        fetch(uri)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isSearch: true,
              products: result
            });
           console.log(products)  
          }
          
        )
        .catch(err => {
          console.log(err.message)
          this.setState({
            isSearch:false,
            isLoaded:false,
            msg:err.message
          })
        })

      }
      const handleKeyPress = e => {
        console.log(q.length) 
        if(q.length<=1){
          
            this.setState({ 
              msg:"Happy Searching "
          }); 
        }
        if (e.key === "Enter") {
          handleTrack();
        }
      }
        return (
         <div>
          
          <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                  <div className="hidden md:block">
                      <div className="ml-6 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                         <div> 
                          <a
                            key={item.name}
                            href={item.href}
                            data-dropdown-toggle={item.id==2?"dropdownNavbar":""}
                            
                            onClick= {(event) => {
                              (!isSearch)? (
                              this.setState({ status: item.disb })
                              ):(
                                
                                this.setState({ status: false, id:item.id })
                              
                                
                                
                              )
                              
                              
                            }}
                          
                            className={
                            classNames(
                              item.id === id ?
                              'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                          
                      </div>
                        ))}
                      </div>
                    </div>
                    </div>
              <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        About
                    </button>
                    
                    </div>
                  
                  </div>
                </div> 
           </div>
          </Disclosure>
            <section className="bg-white">
            <div className="container mx-auto flex items-center flex-wrap space-y-4">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">


              </div>
            </nav>
            {id>2 ? (
              id===3?(
                <Comparison data={products}/>
              ):(
                <Rept data={products}/>
              )
            ):(
            <div className="pt-4 relative mx-auto text-gray-600 max-w-screen-lg">
              <input className="border-2 border-gray-400 bg-white h-10 px-5 ml-4 pr-16 h-12 rounded-lg text-sm focus:outline-none shadow-inner"
                    type="search" name="search" placeholder="Search" value={q} 
                    onChange={e => {
                      this.setState({ q: e.target.value});
                    }}
                    onKeyDown={handleKeyPress} />
                  <button type="submit" className="absolute right-0 top-0 mt-7 mr-12" 
                  onClick={() => {
                      handleTrack();
                    }}
                    >
                    <svg className="text-gray-600 h-6 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50.966 50.966" width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                  <br /><br />
                  example: 
                  <a href="#"   onClick={() =>{
                    q = 'tshirt'
                    handleTrack(); }
                  }     > Tshirt</a>, 
                  <a href="#"   onClick={() =>{
                    q = 'hoodie'
                    handleTrack(); }
                  }> Hoodie</a>, 
                  <a href="#"   onClick={() =>{
                    q = 'sharee'
                    handleTrack(); }
                  }> Sharee</a>, 
                  <a href="#"  onClick={() =>{
                    q='joggers'; 
                    handleTrack(); }
                  }> joggers</a> 
                   ....
                </div>
            )}
          { !isLoaded ? (
                <div className="w-full"> 
                <div className="flex items-center justify-center my-32">
                <h3 className="text-gray-400 text-2xl font-bold">  
                { msg }
                </h3>
                </div>
                </div> 
            ) : (  
                !isSearch ? (
              <div className="w-full">
                <div className="flex items-center justify-center my-32">
                <Puff
                    height="70"
                    width="70"
                    radisu={1}
                    color="#0456ff"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              </div>
            ) : (
              
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-16 text-center">
                 
                  {products.map((product) => (
                    
                      
                      <div>
                        <div className="container bg-gray-80 max-w-screen-lg mx-auto h-7 text-base mt-10 text-stone-800"><h3 class="font-medium">{product.name} products
                        </h3>
                        </div>
                        <Products data={product.p} />
                    </div>
                  

                  
                    
                  )
                )
                      
                      }
                
              </div>
                ) 
               
              )
            }
            </div>
            </section>
            <ReactJsAlert
              status={status} // true or false
              type={type} // success, warning, error, info
              title= "Please Search for a product First"
              Close={() => this.setState({ status: false })}
            />
         </div>
        );
    }
}
export default Home;