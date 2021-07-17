import {useState} from 'react'
export const Image=(props)=>{
    const [maxwidth,setMaxwidth] = useState()
    const {
        src,
        width=maxwidth,
        height
    }=props
    function handleClick(){
        console.log("click");
        setMaxwidth('100%')
    }
    return <img className="AE_Image" src={src} width={width} height={height} onClick={handleClick}>
    </img>
}

export const Video=(props)=>{
    const {
        src="//qvod.yiche.com/48848f91vodtransgzp1251489075/5a6e72e55285890819134108800/v.f40.mp4",
    }=props
    return <video className="AE_Media" mediaGroup="true" src={src} controls width="500" ></video>
}