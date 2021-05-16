import React from 'react'
export default function (props){
    const {
        text,
        type,
        color,
        left,
        center,
        right,
        width,
    }=props
    let textAlign;
    if(right){
        textAlign = "right"
    }else if(center){
        textAlign = "center"
    }else if(left){
        textAlign = "left"
    }

    return <h1 className={`AES_Title ${type}`} style={{
        color,
        textAlign,
        width,
    }}>{text}</h1>
}