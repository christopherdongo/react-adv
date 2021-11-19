import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { Tracing } from "trace_events";


export interface Props {
  className?:string,
  title?:string,
  activeClass?:Tracing,
  style?:React.CSSProperties;
}

export const ProductTitle = ({ title, className,style}:Props) => {

    const {title:TitleContext} = useContext(ProductContext)

  return <span style={style}  className={`${styles.productDescription} ${className}`}>{title ? title : TitleContext}</span>;
};
