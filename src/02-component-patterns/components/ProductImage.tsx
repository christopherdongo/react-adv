import { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImages from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {

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
      src={imgToShow}
      alt="productimage"
      className={styles.productImg}
    />
  );
};

