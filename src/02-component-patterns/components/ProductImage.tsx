import { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImages from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export interface Props {
  img?:string,
  className?:string,
  style?:React.CSSProperties;
}
export const ProductImage = ({ img, className,style }:Props) => {

    const {img:imgContext} = useContext(ProductContext);
    let imgToShow:string;

    if(img){
        imgToShow = img;
    }else if(imgContext){
        imgToShow = imgContext;
    }else{
        imgToShow = noImages;
    }

  return (
    <img
    style={style}
      src={imgToShow}
      alt="productimage"
      className={`${styles.productImg} ${className}`}
    />
  );
};

