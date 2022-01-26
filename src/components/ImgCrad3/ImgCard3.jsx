import React from "react";
import "./ImgCard3.scss"

const ImgCard3 = (props)=>{
    return(
        <div className="ImgCard3">
        <div className="information">
            <h2>Hokokuji Bamboo Forest</h2>
            <p>Alberta, Canada</p>
        </div>
        <img src={props.img} alt="error" />
        
    </div>
    )
}
export default ImgCard3