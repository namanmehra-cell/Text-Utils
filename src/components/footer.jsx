import React from "react";

export default function Footer(props){

   let year = new Date().getFullYear()  

    return(
        
        <footer>
        <div className={`d-flex align-items-center justify-content-center text-${props.theme==='light'?'dark':'light'}`} style={{marginTop:"250px", lineHeight:"0.3"}}>
        <p>Copyright Ⓒ {year} </p>
        
        <p style={{inLine:"block"}}>Made by Naman</p>
        </div>
        </footer>
        
    )
}