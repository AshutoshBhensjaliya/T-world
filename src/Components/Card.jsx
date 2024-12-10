import { useState } from "react";
import './Card.css';

function Card({image,info,price,name})  {
    const[readmore,setReadmore] = useState(false);
    const[status,setStatus] = useState("Book Trek")
    
    const description = readmore ? info :`${info.substring(0,150)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function clickHandler(){
        setStatus("Booked");
        alert(`Your ${name} has been booked Successfully ! Enjoy Your Trek .`)
    }


    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={clickHandler}>
               {status}
            </button>
        </div>
        
    );
}

export default Card;