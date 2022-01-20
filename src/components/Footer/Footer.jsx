import React from "react";
import "./footer.scss"
const Footer = ()=>{
    return(
        <div className="Footer container-fluid">
            <div className="row">
                <div className = "col-2">
                <ul className = " nav flex-column">
                                <li className = "nav-item w-100"><img src = "./assets/images/svg/Expedia.svg" className = "nav-link logo-footer" /></li>
                                <li className = "nav-item"><a className = "nav-link Inc" href = "#"> © 2021 Expedia, Inc., an Expedia Group company. All rights reserved. </a></li>
                                                
                            </ul>
                        </div>
                
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link bold">Company</a></li>
                        <li className="nav-item"><a className="nav-link ">About us</a></li>
                        <li className="nav-item"><a className="nav-link ">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link ">List your property</a></li>
                        <li className="nav-item"><a className="nav-link ">Partnership</a></li>
                        <li className="nav-item"><a className="nav-link ">Advertising</a></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link bold">Explore</a></li>
                        <li className="nav-item"><a className="nav-link ">About us</a></li>
                        <li className="nav-item"><a className="nav-link ">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link ">List your property</a></li>
                        <li className="nav-item"><a className="nav-link ">Partnership</a></li>
                        <li className="nav-item"><a className="nav-link ">Advertising</a></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link bold">Term and Policies</a></li>
                        <li className="nav-item"><a className="nav-link ">About us</a></li>
                        <li className="nav-item"><a className="nav-link ">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link ">List your property</a></li>
                        <li className="nav-item"><a className="nav-link ">Partnership</a></li>
                        <li className="nav-item"><a className="nav-link ">Advertising</a></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link bold">Help</a></li>
                        <li className="nav-item"><a className="nav-link ">About us</a></li>
                        <li className="nav-item"><a className="nav-link ">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link ">List your property</a></li>
                        <li className="nav-item"><a className="nav-link ">Partnership</a></li>
                        <li className="nav-item"><a className="nav-link ">Advertising</a></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link bold">Get in touch</a></li>
                        <li className="nav-item"><a className="nav-link ">Question or feedback?</a></li>
                        <li className="nav-item"><a className="nav-link ">We’d love to hear from you</a></li>
                        
                        <li className="nav-item icons">
                            <a className="nav-link icon"><img src="./assets/images/svg/instagram.svg" alt="" /></a>
                            <a className="nav-link icon"><img src="./assets/images/svg/twitter.svg" alt="" /></a>
                            <a className="nav-link icon"><img src="./assets/images/svg/linkedin.svg" alt="" /></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;
