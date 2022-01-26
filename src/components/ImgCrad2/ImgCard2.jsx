import React from "react";
import "./ImgCard2.scss"

const ImgCard2 = (props)=>{
    return(
        <div className="ImgCard2">
        <div className="information">
            <h2>Hokokuji Bamboo Forest</h2>
            <p>Alberta, Canada</p>
        </div>
        <img src={props.img} alt="error" />
        
    </div>
    )
}
export default ImgCard2;