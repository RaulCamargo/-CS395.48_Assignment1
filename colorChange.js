"use strict";

function altColor() 
{
    let txtColor = document.body.style.color;
    
    if (txtColor == 'black')
        document.body.style.color = 'orange';
    
    else
        document.body.style.color = 'black';   
}