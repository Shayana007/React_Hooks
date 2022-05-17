import React,{useState} from 'react'

function MouseContainer() {
    const [dispaly, setDisplay] = useState(true)
    return (
        <div>
            <button onClick ={()=> setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer
