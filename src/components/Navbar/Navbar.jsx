import React from "react";
import CartWidget from "../CartWidget/CartWidget";



const Navbar = ({curso, cur}) => {
    return(
    
        <div className="head">
            <div className="header">
                <div className="header__title">
                    <h1>{curso}</h1><em>{cur}</em>
                </div>
                    <div className="header__var">
                        <ul>
                            <li><a href="s">Navegacion</a></li>
                            <li><a href="s">Navegacion</a></li>
                            <li><a href="s">Navegacion</a></li>
                            <li><a href="s">Navegacion</a></li>
                        </ul>
                    </div>
                    <CartWidget />
            </div>
        </div>

    );
}


export default Navbar;