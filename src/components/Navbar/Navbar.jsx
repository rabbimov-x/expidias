import React from "react"
import "./navbar.scss"

const Navbar = ()=>{
    return(
        <div className="Navbar container">
            
         <div className="row ">
             <div className="col-3 ">
                 <div className="logo">
                 <img src = "./assets/images/svg/Expedia.svg"  alt="error"></img>
                 </div>
             </div>
             <div className="col-6" >
                     <ul className=" nav">
                         <li className =" nav-item">
                             <span className="nav-link active" href="/home" > Home</span>
                         </li>
                        
                         <li className =" nav-item">
                             <a className="nav-link " href="/trops" > Trops</a>
                         </li>
                         <li className =" nav-item" >
                             <a className="nav-link "href="/aboute" > About</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " href="/support" >Support</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " href="/travel" >Travel</a>
                         </li>
                     </ul>
             </div>
             <div className="col-3 pl-5">
                    <button className="form-control btnSign">Sign Up</button>    
             </div>
         </div>
        </div>
    )
}

export default Navbar;