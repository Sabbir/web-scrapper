<<<<<<< HEAD
import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
=======
import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
>>>>>>> dev
export default Layout;