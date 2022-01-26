import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import ImgCard1 from "../../components/ImgCard1/ImgCard1"
import ImgCard2 from "../../components/ImgCrad2/ImgCard2"
import ImgCard3 from "../../components/ImgCrad3/ImgCard3"
import Footer from "../../components/Footer/Footer.jsx"
import SearchContainer from "../../components/SreachContainer/SearchContainer"

import "./home.scss"

const Home = ()=>{
   
    return(
        <div className="home">
            
                
                <div className="header container-fluid">
                 < div className="rectang">
                    </div>
                    <div className="bg-img-header"></div>
                    <div className="headerBg"></div>
                    <div className="row">
                        <Navbar/>
                        <div className="container cr">
                            <div className="row text-center">
                            <p className="travel-h ">It Matters Who You Travel With  </p>
                            <p className="travel-p">
                            We want you to feel confident in the travel experience you will have with us.
                            </p>
                                                           
                            </div>
                        </div>
                        
                    </div>                
                </div>
                <div className="main container-fluid">
                    
                    <div className="row">
                        <div className="container cr">
                            <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="col-12">
                                    <SearchContainer className="SearchContainer"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12">
                           <h1>Top Most Popular Destinations</h1>
                                </div>
                        </div>
                        <div className=" col-md-6">
                            <div className="col-12">
                            <ImgCard1 img = "./assets/images/png/image_3.png"/>
                                </div>
                            <div className="w-100 d-flex justify-content-between">
                            
                                <div className="col-6"><ImgCard2 img = "./assets/images/png/image_5.png"/></div>
                                <div className="col-6"><ImgCard2 img = "./assets/images/png/image_6.png"/></div>
                               
                            </div>
                        </div>
                        <div className="col-11 ml-auto mr-auto   col-sm-6 col-md-3"><ImgCard3 img = "./assets/images/png/image_7.png"/></div>
                        <div className="col-11 ml-auto mr-auto   col-sm-6 col-md-3"><ImgCard3 img = "./assets/images/png/image_8.png"/></div>

                        <div className="col-12">
                            <h1 className="download-text">Download Expedia App !</h1>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                          <button className="download-img-btn">
                              <img src="./assets/images/png/google.jpg" alt="error"/>
                          </button>
                          <button className="download-img-btn">
                              <img src="./assets/images/png/app_store.png" alt="error"/>
                          </button>
                        </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <Footer/>
                
                
            
        </div>
    )
}

export default Home;