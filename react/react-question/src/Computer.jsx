import { useState } from "react";
import Screen from './Screen'

const Computer = () => {
    const [status, setStatus] = useState(false); // 自己的
    const toggle = () => {
        setStatus(!status)
    }
    return (
        <div>
            Computer
            <button onClick={toggle}>开关</button>
            {/* 父子组件传值 */}
            <Screen logo="明基" showContent={status?'显示器亮了':'显示器关了'} />
        </div>
    )
}

export default Computer