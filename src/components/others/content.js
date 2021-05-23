

export default function(props){
    const{
        color,
    }=props

    return <p className="AE_P" style={{color:color}}>
        {[props.children]}
    </p>
}