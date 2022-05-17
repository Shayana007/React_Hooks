import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(5)}> Count {count} </button>
        </div>
    )
}
export default HookCounter