import { useState } from "react"
function Uxxaki(props) {
    const[showLess,setShowLess] = useState(true)
    const max = 30
    if (props.text.length <= max) {
        return <span>{text}</span>
    }

    return(
        <div>
            <span>{showLess?`${props.text.substring(0,max)}...`:props.text}</span>
            <a href="#" onClick={(evt)=>{
                evt.preventDefault()
                setShowLess(!showLess)
            }}>{showLess?"more":"less"}</a>
        </div>
    )
}
export default Uxxaki