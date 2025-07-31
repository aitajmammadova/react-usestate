import { useState } from "react"

function NameInput(params) {
    const [name,setName]=useState("")
    return(
        <div>
            <div><h1>Name: {name}</h1></div>
            <input
            type="text"
            placeholder="Your name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
        </div>
    )
}
export default NameInput