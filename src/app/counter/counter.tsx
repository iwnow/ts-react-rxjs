import React, { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);
    return <>
        <p>count: {count}</p>
        <p><button onClick={() => setCount(count + 1)}>count me</button></p>
    </>
}