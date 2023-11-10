// Code Keypad Component Here
import React from "react";
function Keypad (){
    function changeHandler(e){
        e.preventDefault()
        console.log('Entering password...')
    }

    return (
        <div>
            <input onChange={changeHandler} type="password" />
        </div>
    )
}

export default Keypad;