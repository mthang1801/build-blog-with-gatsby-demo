import React from 'react'
import Navigation from "../Navigation/navigation.component";
import Footer from "../Footer/footer.component"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"
const Layout = ({children}) => {
  return (
    <div>           
      <Navigation/>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          {children}
        </div>       
        <Footer/>
      </div>      
      
    </div>
  )
}

export default Layout
