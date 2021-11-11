import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";


export const ProductTitle = ({ title}:{title?:string}) => {

    const {title:TitleContext} = useContext(ProductContext)

  return <span className={styles.productDescription}>{title ? title : TitleContext}</span>;
};
