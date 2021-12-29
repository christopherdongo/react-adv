
import { useProducts } from "../hooks/useProducts";
import {createContext, ReactElement} from 'react'
import styles from "../styles/styles.module.css";
import { ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

/*creact contexto*/
export const ProductContext = createContext({} as ProductContextProps);


export interface Props{
  id: string;
  title: string;
  img?: string;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?:React.CSSProperties;
  onChange?:(product:onChangeArgs)=>void,
  value?:number,
}


export const ProductCard = ({ id, title, img,children, className,style, onChange,value }:Props)  => {
  const product = {id,title,img};
  const { counter, sumProduct } = useProducts({onChange,product,value});

  return (
      <ProductContext.Provider
      value={{
          counter,
          sumProduct,
          id,
          title,
          img,
      }}
      >
      <div className={ `${styles.productCard} ${className}`}
      style={style}
      >

       {children}

    </div>
      </ProductContext.Provider>

  );
};


