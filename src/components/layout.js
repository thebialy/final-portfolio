import React from "react"
import "./style.css"

const Layout = ({children})=>{
 return(
   <div className= "wholePage">
  <main id="main-content">{children}</main>
  </div>
 )
}

export default Layout