import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from '../data/products';

export const useShoppingCard = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string] : ProductInCart }>({});

    const onProductCountChange=({count,product}:{count:number,product:Product})=>{
  
     
     setShoppingCart( olstate => {
  
      if(count===0){
        //const arr = delete olstate.[product.id]
        //const {[product.id]:old, ...rest} = olstate;
        // const er = delete olstate[product.id];
        /*const res = Object.keys(olstate).reduce( (prev:any, next:any) => {
          if(next===product.id) return prev
          return{
            ...prev,
            [next]:olstate[next]
          }
          
        },{});*/
       const { [product.id]:toDelete, ...rest} = olstate;
       return rest; 
      }
  
          return {
            ...olstate,
            [product.id]: {...product, count}
            
          }
     }
     
     )
  
  
  
     /*
        setShoppingCart({
         ...shoppingCart,
         [product.id]: {...product, count}
       })*/
  
    }
  

    return {
        shoppingCart,onProductCountChange,products
    }
    
}
