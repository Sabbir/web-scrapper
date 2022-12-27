import React from 'react';
import { Fragment } from 'react'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q:'',
      isEnable: false,
      products: {},
      msg:"Search for a product"
    };
  } 

  render() {
    return(
      <div>
      <header>
        <nav id="header" className="w-full z-30 top-0 py-1">
          <div className="w-full container mx-auto flex flex-wrap justify-between mt-0 py-3">
            <div className="hidden md:flex md:w-auto w-full order-2 md:order-1 mr-2" id="menu">
                            
            </div>
          <div className="order-1 md:order-2 text-center">
              <a className="flex tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24">
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                </svg>
                COMP N BUY
              </a>
            </div>
<div className="order-2 md:order-3 flex items-center" id="nav-content">
<a className="inline-block no-underline hover:text-black" href="#">
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </a>

</div>
          </div>
        </nav>
      </header>
      
      </div>
    );
  }
}
export default Header;