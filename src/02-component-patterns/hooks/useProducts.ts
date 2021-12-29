import { useState,useEffect, useRef } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product:Product;
    onChange?:(args:onChangeArgs)=>void;
    value?:number,
}

export const useProducts = ({onChange,product,value=0}:useProductArgs) => {


    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange) //se comprueba el valor 


    const sumProduct=(value:number)=>{

        if (isControlled.current){
            return onChange!({count:value,product}) //return onChange!({count:value,product})confiame en mi siempre vas a tener el valor
        }

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue);

        onChange && onChange({count:newValue,product});
    }

    useEffect(()=>{
        setCounter(value)
       
    },[value]);

    return {counter, sumProduct}

}
