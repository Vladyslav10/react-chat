import React from "react";
import './MyInput.css'

const MyInput = (props) => {
    

    return (
        <div className="input-area">
            <div onClick={props.message} className="my-seach-icon ibg">
                <img src={props.icon} alt="icon" />
            </div>
            <input {...props} className="my-input" type="text" placeholder={props.description} />
        </div>
    )
}

export default MyInput;