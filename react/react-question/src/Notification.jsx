import { useState } from 'react'
function Notification({n}) {
    return (
       <div>
           {n > 0 ? `有${n}条未读消息`: '没有未读消息'}
       </div>
    )
}

export default Notification