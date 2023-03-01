import React, { useState } from "react";
function plus(count, setCount){
    setCount(count+1);
}
function minus(count, setCount){
    setCount(count-1);
}
function CounterExample(){
    const [count, setCount] = useState(5);
    // console.log(useState());
    return(
    <div>
        <h1>
        {count}
        </h1>
        
        <h1 onClick={() => plus(count, setCount)}>
            <button type="button">Plus</button>
        </h1>
        <h1 onClick={() => minus(count, setCount)}>
        <button type="button">Minus</button>
        </h1>
    </div>
    );
}

export default CounterExample;
