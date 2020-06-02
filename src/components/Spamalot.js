import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        const jsxArr = []
        for( let i = 0; i < 500; i++){
            jsxArr.push(< Spam/>)
        }
        return(
            jsxArr
        )
    }
}

export default Spamalot

