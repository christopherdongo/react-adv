
import {ProductButtons,ProductTitle,ProductImage,ProductCard} from '../components/index'
import '../styles/custom-styles.css'

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
                 <ProductCard {...product} 
                 className='bg-dark'
                 >
                    <ProductCard.Image className="custom-image"
                                        style={{
                                          boxShadow :'10px 10px 10px 10px rgba(0,0,0,0.2)'
                                        }}
                    />
                    <ProductCard.Title  title={"cafe colombia"}/>
                    <ProductCard.Buttons className="custom-buttons"/>
                 </ProductCard>


                   <ProductCard {...product} 
                   className='bg-dark'
                   >
                    <ProductImage className="custom-image"                     
                    style={{
                      boxShadow :'10px 10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons  className="custom-buttons"/>
                 </ProductCard>



                 <ProductCard {...product} 
                    style={{
                      backgroundColor: '#70D1F8',
                    }}
                   >
                    <ProductImage 
                    style={{
                      boxShadow :'10px 10px 10px 10px rgba(0,0,0,0.2)'
                    }}
                    />
                    <ProductTitle 
                    style={{
                      fontWeight:'bold',
                    }}
                    />
                    <ProductButtons 
                     style={{
                       display: 'flex',
                       justifyContent:'end'
                     }}
                    />
                 </ProductCard>

             </div>
             
        </div>
    )
}
