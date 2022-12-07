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
export default Home;