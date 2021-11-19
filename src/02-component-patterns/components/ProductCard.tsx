
import { useProducts } from "../hooks/useProducts";
import {createContext, ReactElement} from 'react'
import styles from "../styles/styles.module.css";
import {ProductContextProps} from '../interfaces/interfaces';


/*creact contexto*/
export const ProductContext = createContext({} as ProductContextProps);

export interface Props{
  id: string;
  title: string;
  img?: string;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?:React.CSSProperties;
  
}

export const ProductCard = ({ id, title, img,children, className,style }: Props) => {
  const { counter, sumProduct } = useProducts();

  return (
      <ProductContext.Provider
      value={{
          counter,
          sumProduct,
          id,
          title,
          img
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


