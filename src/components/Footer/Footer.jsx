import React from "react";
import "./footer.scss"
const Footer = ()=>{
    return(
        <div className="Footer container-fluid">
            <div className="row">
                <div className = "col-2">
                <ul className = " nav flex-column">
                                <li className = "nav-item w-100"><img src = "./assets/images/svg/Expedia.svg" className = "nav-link logo-footer" alt="error" /></li>
                                <li className = "nav-item"><span className = "nav-link Inc" > © 2021 Expedia, Inc., an Expedia Group company. All rights reserved. </span></li>
                                                
                            </ul>
                        </div>
                
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><span className="nav-link bold">Company</span></li>
                        <li className="nav-item"><span className="nav-link ">About us</span></li>
                        <li className="nav-item"><span className="nav-link ">Jobs</span></li>
                        <li className="nav-item"><span className="nav-link ">List your property</span></li>
                        <li className="nav-item"><span className="nav-link ">Partnership</span></li>
                        <li className="nav-item"><span className="nav-link ">Advertising</span></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><span className="nav-link bold">Explore</span></li>
                        <li className="nav-item"><span className="nav-link ">About us</span></li>
                        <li className="nav-item"><span className="nav-link ">Jobs</span></li>
                        <li className="nav-item"><span className="nav-link ">List your property</span></li>
                        <li className="nav-item"><span className="nav-link ">Partnership</span></li>
                        <li className="nav-item"><span className="nav-link ">Advertising</span></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><span className="nav-link bold">Term and Policies</span></li>
                        <li className="nav-item"><span className="nav-link ">About us</span></li>
                        <li className="nav-item"><span className="nav-link ">Jobs</span></li>
                        <li className="nav-item"><span className="nav-link ">List your property</span></li>
                        <li className="nav-item"><span className="nav-link ">Partnership</span></li>
                        <li className="nav-item"><span className="nav-link ">Advertising</span></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><span className="nav-link bold">Help</span></li>
                        <li className="nav-item"><span className="nav-link ">About us</span></li>
                        <li className="nav-item"><span className="nav-link ">Jobs</span></li>
                        <li className="nav-item"><span className="nav-link ">List your property</span></li>
                        <li className="nav-item"><span className="nav-link ">Partnership</span></li>
                        <li className="nav-item"><span className="nav-link ">Advertising</span></li>
                    </ul>
                </div>
                <div className=" col">
                    <ul className="nav flex-column">
                        <li className="nav-item"><span className="nav-link bold">Get in touch</span></li>
                        <li className="nav-item"><span className="nav-link ">Question or feedback?</span></li>
                        <li className="nav-item"><span className="nav-link ">We’d love to hear from you</span></li>
                        
                        <li className="nav-item icons">
                            <span className="nav-link icon"><img src="./assets/images/svg/instagram.svg" alt="error" /></span>
                            <span className="nav-link icon"><img src="./assets/images/svg/twitter.svg" alt="error" /></span>
                            <span className="nav-link icon"><img src="./assets/images/svg/linkedin.svg" alt="error" /></span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;
