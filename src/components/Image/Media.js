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

// export const Video=(props)=>{
//     const {

//     }
// }