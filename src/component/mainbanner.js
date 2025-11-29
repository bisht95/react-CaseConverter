import React from 'react';

function Mainbanner(props) {

    return(

        <div className='main-banner mt-4' style={{color: props.mode==='dark'?'white':'#000'}}>


            <div className='container'>
                <h1>Main Banner {props.name}</h1>
                <p>{props.subheading}</p> 
                {/* <img src="../logo192.png" alt='logo192'/> */}
            </div>

        </div>

    )

}

export default Mainbanner;