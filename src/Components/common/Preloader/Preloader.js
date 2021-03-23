import React from "react";
import preloater from '../../../assets/images/proloader.svg'

let Preloader = (props) => {
    return(
        <div>
            <img src={preloater}/>
        </div>
    )
}

export default Preloader;