import { useState } from "react";

const Button = (props) => {
    let [count, setCount] = useState(props.start);

    return (
        <button className="btn btn-danger m-1" onClick={ ()=> {setCount(count + 1)} }>
            Click me ! ({count})
        </button>
    )
}

export default Button
