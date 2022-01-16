import {
  ProductButtons,
  ProductTitle,
  ProductImage,
  ProductCard
} from "../components/index";
import "../styles/custom-styles.css";
import { useShoppingCard } from '../hooks/useShoppingCard';

export const ShoppingPages = () => {

 const {shoppingCart,onProductCountChange,products} = useShoppingCard();

  return (
    <div>
      <h1>Shopping Store</h1>
      <br />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          products.map( (item,index) => (
            <ProductCard {...item} 
            className="bg-dark" key={item.id}
            onChange={onProductCountChange}
            value={shoppingCart[item.id]?.count || 0}
            
            >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)"
              }}
            />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
          ))
        }

      </div>
      <div className="shopping-cart">

            {
              // Object.keys(shoppingCart).map((item,index) => { return shoppingCart[item]})
              Object.entries(shoppingCart).map(([key, item]) => {
                return (
                  <ProductCard {...item} className="bg-dark" 
                  style={{width:'100px'}}
                  key={key}
                  value={item.count}
                  onChange={onProductCountChange}
                  >
                        <ProductImage
                          className="custom-image"
                          style={{
                            boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)"
                          }}
                        />
            
                        <ProductButtons className="custom-buttons" style={{display:'flex', justifyContent: 'center',}} />
                      </ProductCard> 
                )
              })
            }     
      </div>
    </div>
  );
};
