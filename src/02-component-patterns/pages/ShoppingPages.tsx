
import {ProductButtons,ProductTitle,ProductImage,ProductCard} from '../components/index'


const product = {
  id:'1',
  title:'Coffe Mug - Card',
  img:'./coffee-mug.png',

}
export const ShoppingPages = () => {
    return (
        <div>
             <h1>Shopping Store</h1>
             <br />
             <div
             style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}
             >
                 <ProductCard {...product} >
                    <ProductCard.Image />
                    <ProductCard.Title  title={"cafe colombia"}/>
                    {/*<ProductCard.Buttons />*/}
                    <ProductCard.Buttons />
                    
                 </ProductCard>


                   <ProductCard {...product} >
                    <ProductImage />
                    <ProductTitle/>
                    <ProductButtons />
     
                 </ProductCard>

             </div>
             
        </div>
    )
}
