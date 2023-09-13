// Code Keypad Component Here

export default function Keypad(){
    return (
        <div>
            <input onChange={keyChange} type="password" />
        </div>
    )
}

function keyChange(){
    return (console.log("Entering password..."))
}