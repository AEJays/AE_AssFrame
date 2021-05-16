import React from 'react'
import ReactDOM from 'react-dom'
// 组件
import { Text } from './components/index'

// 样式文件
import './public/index.less'

function App(){
    const {
        Title
    }=Text

    return <>
        <Title 
        type="front" 
        color="blue" 
        left
        text="Hello AE_AssFrame!"
        width="500px"
        ></Title>
    </>
}
ReactDOM.render(<App/>,document.getElementById('View'))