import React from "react";



const ItemListContainer = (props) => {
    console.log(props)
    return(
        <div className="greeting">
            <h2>{props.greeting}</h2>
        </div>
    )
};

export default ItemListContainer;