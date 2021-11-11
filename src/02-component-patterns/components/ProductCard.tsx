import { useProducts } from "../hooks/useProducts";
import {createContext} from 'react'
import styles from "../styles/styles.module.css";
import { ProductContextProps, PropsProductsCard } from '../interfaces/interfaces';


/*creact contexto*/
export const ProductContext = createContext({} as ProductContextProps);


export const ProductCard = ({ id, title, img,children }: PropsProductsCard) => {
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
      <div className={styles.productCard}>

       {children}

    </div>
      </ProductContext.Provider>

  );
};


