<<<<<<< HEAD
import React from "react";

const products = [
    {
      id: 1,
      name: 'Product Name',
      href: '#',
      price: '$9.99',
      imageSrc: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      name: 'Product Name',
      href: '#',
      price: '$10.99',
      imageSrc: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      name: 'Product Name',
      href: '#',
      price: '$12.99',
      imageSrc: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      name: 'Product Name',
      href: '#',
      price: '$9.99',
      imageSrc: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 5,
      name: 'Product Name',
      href: '#',
      price: '$6.99',
      imageSrc: 'https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 6,
      name: 'Product Name',
      href: '#',
      price: '$10.99',
      imageSrc: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 7,
      name: 'Product Name',
      href: '#',
      price: '$22.99',
      imageSrc: 'https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 8,
      name: 'Product Name',
      href: '#',
      price: '$19.99',
      imageSrc: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    },
]
class Home extends React.Component{
    render(){
        return (
         <div>
            <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                              Store
                            </a>
            <div className="flex items-center" id="store-nav-content">
            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                              </a>
            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>
                              </a>
            </div>
                          </div>
                        </nav>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                          {products.map((product) => (
                            <a key={product.id} href={product.href}>
                              <img className="hover:grow hover:shadow-lg" src={product.imageSrc} />
                              <div className="pt-3 flex items-center justify-between">
                                <p className="">{product.name}</p>
                                <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                </svg>
                              </div>
                              <p className="pt-1 text-gray-900">{product.price}</p>
                            </a>
                          ))}
                        </div>
            </div>
            </section>
         </div>
        );
    }
}
=======
import React from 'react';
import { Puff } from  'react-loader-spinner'
import Products from './products';


class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      q:'',
      isSearch: false,
      isLoaded: false,
      products: {},
      msg:"Search for a product"
    };
  }
  
  componentDidMount() {
    
    console.log("Componenet mounts")
    
    }
   
    render(){
      const { q, isSearch, isLoaded, products, msg } = this.state;
      
      if(isSearch){
        console.log(products[2])
        products.forEach(el => {
          
               console.log(el)
        });
        // ((product) => (

        //   console.log(product)
        // ))
        
      
      }

      const handleTrack = () => {
        if (q.length !== 0) {
          this.setState({isLoaded:true});
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
         if(q.length===0){
            this.setState({ 
              isSearch:false,
              isLoaded:false,
              products: [],
              msg:"Happy Searching "
          }); 
        }
        if (e.key === "Enter") {
          handleTrack();
        }
      }
        return (
         <div>
            <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 space-y-8 mr-2">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            
            
                          </div>
                        </nav>
                        <div className="pt-2 relative mx-auto text-gray-600">
                          <input className="border-2 border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" value={q} 
                            onChange={e => {
                              this.setState({ q: e.target.value});
                            }}
                            onKeyPress={handleKeyPress} />
                          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" 
                          onClick={() => {
                              handleTrack();
                            }}
                            >
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 56.966 56.966" width="512px" height="512px">
                              <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                          </button>
                        </div>
                  { !isLoaded ? (
                     <div className="w-full"> 
                      <div className="flex items-center justify-center my-32">
                      <h3 className="text-gray-300 text-2xl font-bold">  
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
              
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-16">
                 
                          {products.map((product) => (
                            
                             
                              <div>
                                <div className="container max-w-screen-lg mx-auto my-8 ml-8 justify-center">{product.name} product</div>
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
         </div>
        );
    }
}
>>>>>>> dev
export default Home;