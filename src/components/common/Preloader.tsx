import React from "react";
import preloader from '../../assets/svg/spinning-dots.svg';

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="Loading..." style={{ width: '100px', height: '100px' }} />
        </div>
    )
}

export default Preloader;