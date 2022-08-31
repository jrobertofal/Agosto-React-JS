import React from "react";

const Footer = ({infofoot}) => {
    return(
        <div className="foot">
            <div className="foot__info">
                <p>{infofoot}</p>
            </div>
        </div>
    )
}

export default Footer;