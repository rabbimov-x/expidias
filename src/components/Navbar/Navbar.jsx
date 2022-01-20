import React from "react"
import "./navbar.scss"

const Navbar = ()=>{
    return(
        <div className="Navbar container">
            
         <div className="row ">
             <div className="col-3 ">
                 <div className="logo">
                 <img src = "./assets/images/svg/Expedia.svg"></img>
                 </div>
             </div>
             <div className="col-6" >
                     <ul className=" nav">
                         <li className =" nav-item">
                             <a className="nav-link active"  > Home</a>
                         </li>
                        
                         <li className =" nav-item">
                             <a className="nav-link " > Trops</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " > About</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " >Support</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " >Travel</a>
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