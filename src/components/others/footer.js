import logo from '../../public/svg/logo.svg'
export const Footer=(props)=>{
    const{
        svg=logo
    }=props
    return <div className="AE_Footer">
        <object data={svg} width="12" style={{marginRight:5}}></object>{props.children}
    </div>
}