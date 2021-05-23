import {useState} from 'react'
const date = new Date();
const Y = date.getFullYear(); 
const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
const D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()); 
const h = date.getHours(); 
const m = (date.getMinutes()<10? '0'+(date.getMinutes()):date.getMinutes()); 
const s = (date.getSeconds()<10? '0'+(date.getSeconds()):date.getSeconds());

export const GetYMD = (props) => {
    let NOW;
    const {
        theme,
        Year=Y,
        Month=M,
        Day=D
    } = props
    if(theme==="line"){
        NOW = Year+"/"+Month+"/"+Day
    }else{
        NOW = Year+"年"+Month+"月"+Day+"日"
    }
    return NOW
}
export const GetALL = (props) =>{
    let Times;
    const {
        theme,
        Year=Y,
        Month=M,
        Day=D,
        Hour=h,
        Min=M,
        Second=s
    } = props
    if(theme==="line"){
        Times = Year+"/"+Month+"/"+Day+" "+Hour+":"+Min+":"+Second
    }else{
        Times = Year+"年"+Month+"月"+Day+"日"+" "+Hour+"时"+Min+"分"+Second+"秒"
    }
    return Times
}