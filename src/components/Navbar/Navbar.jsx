import React from "react"
import "./navbar.scss"

const Navbar = ()=>{
    return(
        <div className="Navbar container">
            
         <div className="row ">
             <div className="col-xl-3 col-lg-3 d-flex pb-4 pb-md-0">
                 <div className="logo">
                 <img src = "./assets/images/svg/Expedia.svg" alt = "error"></img>
                 </div>
                 
                 <button className="form-control d-lg-none  btnSign">Sign Up</button>
             </div>
             
             <div className="col-lg-6 d-flex justify-content-center   " >
                     <ul className=" nav">
                         <li className =" nav-item">
                             <a className="nav-link active" href="/home"  > Home</a>
                         </li>
                        
                         <li className =" nav-item">
                             <a className="nav-link " href = "/trops" > Trops</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " href="/about" > About</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " href="/support" >Support</a>
                         </li>
                         <li className =" nav-item">
                             <a className="nav-link " href="/travel" >Travel</a>
                         </li>
                     </ul>
             </div>
             <div className="col-3  pl-lg-5 d-none d-lg-block">
                    <button className="form-control btnSign">Sign Up</button>    
             </div>
         </div>
        </div>
    )
}

export default Navbar;