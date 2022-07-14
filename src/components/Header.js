import React, {useState} from "react";

function Header({onDarkModeClick}){

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick }>/ Mode/</button>
        </header>
    )

}

export default Header 