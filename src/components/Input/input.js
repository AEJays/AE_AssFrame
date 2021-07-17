import React,{useState} from 'react'
export const Input = (props) =>{
    const [Value,setValue]=useState()
    const [View,setView] = useState(false)
    const [text,setText] = useState("")
    function hashChange(e){
        let val = e.target.value
        console.log(val);
        val=val.replace(/\a,/g,"一一一")
        if(val.search(/\a./g)!==-1){
            setView(true)
        }
        console.log(val);
        setValue(val),
        setText(val)
        return Value,text
    }
    return View?<input value={Value}  onChange={(e)=>hashChange(e)}/>:
    <><input value={Value}  onChange={(e)=>hashChange(e)}/>
    <h1>{text}</h1>
    </>
}