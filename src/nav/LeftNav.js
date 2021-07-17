import React from 'react'
export default function LeftNav(props){
    const {
        content
    }=props
    const {
        title=[],
        url=[],
        svg=[]
    }=content
    console.log(title);
    return <div className="AE_LeftNav">
        <ul className="AE_LeftNav_Body">
           {content? title.map((text,i)=><li className="AE_LeftNav_Child" key={i}>
               <a href={url[i]}>{svg[i]}{title[i]}</a>
            </li>):null}
        </ul>
    </div>
}