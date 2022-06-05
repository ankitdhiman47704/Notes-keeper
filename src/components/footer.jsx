import React from "react";

var date = new Date();

function Footer(){
    return(
        <footer><p>copyright © {date.getFullYear()} -Ankit Dhiman</p></footer>
    );
}
export default Footer; 