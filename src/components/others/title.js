import { GetYMD,GetALL,setYMD } from "./time"
export const Title=(props)=>{
    const {
        theme,
        hasTime="true",
        YMD,
        ALL,
        Time='default',
        Timeset={},
    }=props
    
    const {
        Year,
        Month,
        Day,
        Hour,
        Min,
        Second
    }=Timeset
    const text = props.children?props.children:"请输入标题"

    if(theme===undefined){
        if(hasTime === "true"){
            if(YMD){
                return <>
                <span className='AE_Time'>
                    <GetYMD theme={Time} Year={Year} Month={Month} Day={Day}>

                    </GetYMD>
                </span>
                <p className={`AE_Title`}>{text} </p>
                </>
            }else if(ALL){
                return <>
                <span className='AE_Time'>
                    <GetALL theme={Time} Year={Year} Month={Month} Day={Day} Hour={Hour} Min={Min} Second={Second}>

                    </GetALL>
                </span>
                <p className={`AE_Title`}>{text} </p>
                </>
            }else{
                return <>
                {/* <span className='AE_Time'>
                    <GetYMD theme={Time} Year={Year} Month={Month} Day={Day}>

                    </GetYMD>
                </span> */}
                <p className={`AE_Title`}>{text} </p>
                </>
            }
        }else{
            return <>
                <p className={`AE_Title`}>{text} </p>
            </>
        }
    }else{
        if(hasTime === "true"){
            if(YMD){
                return <>
                <span className='AE_Time'>
                    <GetYMD theme={Time} Year={Year} Month={Month} Day={Day}>
                        
                    </GetYMD>
                </span>
                <p className={`AE_Title ${theme}`}>{text}</p>
                </>
            }else if(ALL){
                return <>
                <span className='AE_Time'>
                    <GetALL theme={Time} Year={Year} Month={Month} Day={Day} Hour={Hour} Min={Min} Second={Second}>
                    </GetALL>
                </span>
                <p className={`AE_Title ${theme}`}>{text}</p>
                </>
            }else{
                return <>
                {/* <span className='AE_Time'>
                    <GetYMD theme={Time} Year={Year} Month={Month} Day={Day}>

                    </GetYMD>
                </span> */}
                <p className={`AE_Title ${theme}`}>{text}</p>
                </>
            }
        }else{
            return <>
                <p className={`AE_Title ${theme}`}>{text} </p>
            </>
        }
    }
}

export const SubTitle = (props) =>{
    const {
        theme,
        color="default",
    }=props
    const text = props.children?props.children:"请输入副标题"
    return <h1 className={`AE_SubTitle ${theme} ${color}`}>{text}</h1>
}