import React from "react";
import "./ImgCard1.scss"

const ImgCard1 = (props)=>{
    return(
        <div className="ImgCard">
            <div className="information">
                <h2>Moraine Lake</h2>
                <p>Alberta, Canada</p>
            </div>
            <img src={props.img} alt="error" />
            
        </div>
    )
}
export default ImgCard1