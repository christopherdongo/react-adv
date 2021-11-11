import { useState } from "react";


export const useProducts = () => {

    const [counter, setCounter] = useState(0);

    const sumProduct=(value:number)=>{
        setCounter((prev:number) => Math.max(prev + value, 0))
    }

    return {counter, sumProduct}

}
