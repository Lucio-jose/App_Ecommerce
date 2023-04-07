import React from "react";
import * as S from './style'
import data, {categoriadata, cart} from './data'
import { Link } from "react-router-dom";

function Products(){
    return(
        <> 
        <S.ContentProduct>
            <S.SideLeft>
                <h2>Producto de qualidade só há Aqui</h2>
 

        {categoriadata.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.desc} </Link>
            <h3>Ecomenda o seu producto</h3>
            </section>

            <S.ContentP key={index_}>
            {data.map((item, index)=>(
                <S.Card key={index}>
                    <section key={index} id="BtnsCartCompra">
                        <button key={index} id="AddCart"> {item.cart} </button>
                        <button id="btcomprar">Comprar</button>
                    </section>
                    <img key={index} src={item.img} />
                    <p key={index}>
                        {item.describe}
                    </p>
                    <span key={index}>$<span key={index}>
                        {item.preco}
                    </span></span>
                </S.Card>
            ))}
        </S.ContentP>

        <section id="LinkPageProducts">
            <Link to="/dashpesquisa">Ver mais</Link>
            </section>
        </>
        ))}
            </S.SideLeft>
            <S.SideRight>
                <h3>Meu Carrinho</h3>
                {cart.map((item, index)=>(
                     <S.Cart key={index}>
                     <section key={index}>
                         <span key={index}>00</span>
                         <span key={index}>10/04</span>
                     </section>
                     <section key={index}>
                         <span key={index}>
                             <h5>IPhone12 Pro max</h5> 
                         </span>
                     </section>
                     <section key={index}>
                        <button key={index}>C</button>
                        <button key={index}> + </button>
                     </section>
                 </S.Cart>
                ))}
               
            </S.SideRight>
        </S.ContentProduct>
        </>
    )
}
export default Products;