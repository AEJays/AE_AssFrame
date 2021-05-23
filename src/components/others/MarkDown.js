import MD from '../../1.md'
function ReadMarkdown(){
    let MDBg = document.getElementById("AE_MarkDown").contentWindow.document.getElementsByTagName("body")[0]
    let MDText = document.getElementById("AE_MarkDown").contentWindow.document.getElementsByTagName("pre")[0]
    let ViewHtml = document.getElementById("MD_View")
    let ChText = MDText.innerText.split("\n")
    // MDText.style.background = "black"
    // MDText.style.color = "white"
    MDText.innerHTML=""
    for(let i=0;i<ChText.length;i++){
        if(ChText[i].indexOf("###### ")!=-1){
            let text = ChText[i].replace(/###### /,"")
            MDText.innerHTML+="<h6>"+text+"</h6>"
        }else if(ChText[i].indexOf("##### ")!=-1){
            let text = ChText[i].replace(/##### /,"")
            MDText.innerHTML+="<h5>"+text+"</h5>"
        }else if(ChText[i].indexOf("#### ")!=-1){
            let text = ChText[i].replace(/#### /,"")
            MDText.innerHTML+="<h4>"+text+"</h4>"
        }else if(ChText[i].indexOf("### ")!=-1){
            let text = ChText[i].replace(/### /,"")
            MDText.innerHTML+="<h3>"+text+"</h3>"
        }else if(ChText[i].indexOf("## ")!=-1){
            let text = ChText[i].replace(/## /,"")
            MDText.innerHTML+="<h2>"+text+"</h2>"
        }else if(ChText[i].indexOf("# ")!=-1){
            let text = ChText[i].replace(/# /,"")
            MDText.innerHTML+="<h1>"+text+"</h1>"
        }else if(ChText[i].indexOf("> ")!=-1){
            let text = ChText[i].replace(/> /,"")
            MDText.innerHTML+="<a>"+text+"</a>"
        }else{
            MDText.innerHTML+=ChText[i]
        }
    }
}
export default function MarkDown(props){
    const {
        src=MD
    }=props
    return <iframe src={src} width="100%" height="800px" frameBorder="none" id="AE_MarkDown" onLoad={ReadMarkdown}></iframe>
}