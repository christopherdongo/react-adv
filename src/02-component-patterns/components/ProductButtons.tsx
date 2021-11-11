import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";


export const ProductButtons = () => {

    const { sumProduct,counter} = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => sumProduct(-1)}
        disabled={counter === 0 ? true : false}
      >
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => sumProduct(1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

