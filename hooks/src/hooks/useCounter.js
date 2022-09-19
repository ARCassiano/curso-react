import { useState } from "react";

export const useCounter = (initialValue = 100)=> {
    const [count, setCount] = useState(initialValue);

    function inc(){
        setCount(x => ++x);
    }

    function dec(){
        setCount(x => --x);
    }

    return {
        count, 
        inc,
        dec
    }
};