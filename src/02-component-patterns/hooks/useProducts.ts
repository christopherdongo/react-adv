import { useState,useEffect } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product:Product;
    onChange?:(args:onChangeArgs)=>void;
    value?:number,
}

export const useProducts = ({onChange,product,value=0}:useProductArgs) => {


    const [counter, setCounter] = useState(value);


    const sumProduct=(value:number)=>{

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue);

        onChange && onChange({count:newValue,product});
    }

    useEffect(()=>{
        setCounter(value)
       
    },[value]);

    return {counter, sumProduct}

}
