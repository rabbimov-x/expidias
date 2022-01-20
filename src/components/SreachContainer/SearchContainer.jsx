import React from "react";
import "./SearchContainer.scss"

const SearchContainer = ()=>{
    return(
        <div className="SearchContainer">
             <div className="container">
         

        <ul className="nav">
            <li className="nav-item  nav-item1 active"><a href="#all" data-toggle="tab" className="nav-link ">Stays</a></li>
            <li className="nav-item nav-item1"><a href="#pizza" data-toggle="tab" className="nav-link">Flight</a></li>
            <li className="nav-item nav-item1"><a href="#burger" data-toggle="tab" className="nav-link">Flight</a></li>
            <li className="nav-item nav-item1"><a href="#combo" data-toggle="tab" className="nav-link">Packages</a></li>
            <li className="nav-item nav-item1"><a href="#salad" data-toggle="tab" className="nav-link">Things to do</a></li>
        </ul>
        <div className="line"></div>

        <div className="tab-content">
            <div className="tab-pane active" id="all">

                <section>
                    <from action="/action_page.php" className="formAll container">
                        <div className="row">

                            
                            <div className=" col-6 d-flex  justify-content-between aligin-items-center pl-4">
                                <div className="w3-half" >
                                    <input type="radio"  className="check-bok" id="customRadio2" name="customRadio"/>
                                    <label for="customRadio2">One-way</label>
                                </div>
                                <div className="w3-half" >
                                    <input type="radio" className="check-bok" id="customRadio2" name="customRadio"/>
                                    <label for="customRadio2">Return</label>
                                </div>
                                <div className="w3-half" >
                                    <input type="radio" className="check-bok" id="customRadio2" name="customRadio" />
                                    <label for="customRadio2">Multi-city</label>
                                </div>

                            
                            </div>   
                            <div className="col-6 t-v ">
                                    <div className="dropdoun d-flex justify-content-center aligin-items-center">
                                        <p>2 traveller 	</p>
                                        <h2>&#8964;</h2>
                                        <div className="dropdounin">
                                            <ul className="nav flex-column">
                                                <li className="nav-item"> <a className="nav-link">1 Toshkent </a></li>
                                                <li className="nav-item"> <a className="nav-link">2 Toshkent</a></li>
                                                <li className="nav-item"> <a className="nav-link">3 Toshkent</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropdoun d-flex justify-content-center aligin-items-center">
                                        <p>Economy</p>
                                        <h2>&#8964;</h2>
                                        <div className="dropdounin">
                                            <ul className="nav flex-column">
                                                <li className="nav-item"> <a className="nav-link">1 Toshkent</a></li>
                                                <li className="nav-item"> <a className="nav-link">2 Toshkent</a></li>
                                                <li className="nav-item"> <a className="nav-link">3 Toshkent</a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div> 
                            <div className="col-12 pt-2 d-flex justify-content-between aligin-items-center">
                                <div className="input-city"> 
                                    <img src="./assets/images/svg/fly.svg" className="pr-3" alt="" />
                                <input type="text" placeholder="from" required />

                                </div>
                                <div className="replace">
                                    <img src="./assets/images/svg/change_btn.svg" alt="" />
                                </div>
                                <div className="input-city"> 
                                    <img src="./assets/images/svg/land.svg" className="pr-3" alt="" />
                                <input type="text" placeholder="to" required />
                                
                                </div>
                                <div className="input-city">
                                    <input type="date" className="form-data" required />
                                </div>
                                <div className="input-city">
                                    <input type="date" className="form-data" required />
                                </div>
                            </div>
                            <button className="btn-search" type="sumit">Search</button>
                        </div>
                  </from>  
                </section>
                

                
            </div>
            <div className="tab-pane " id= "pizza">
                <section>
                    
                </section>
            </div>
        
        </div>
    </div>
        </div>
    )
}
export default SearchContainer;