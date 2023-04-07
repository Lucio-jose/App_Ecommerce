import React from "react";
import data, {categoriadata} from './data.js'
import * as Style from './style.js';
import { Link } from "react-router-dom";

function Products(){
return(
    <>
    <Style.Container>
        {categoriadata.map((item_, index_)=>(
            <>
            <section key={index_} className="category-name">
            <Link to="#" key={index_}> {item_.desc} </Link>
            <h3>Top Best Selling Product</h3>
            </section>

            <Style.Content key={index_}>
            {data.map((item, index)=>(
                <Style.Card key={index}> 
                    <section key={index} id="Testaa">
                        <button key={index} id="AddCart"> {item.cart} </button>
                        <Link to="/formcompra"> <button id="btcomprar">Comprar</button> </Link>
                    </section> 
                    <img key={index} src={item.img} />
                    <p key={index}>
                        {item.describe}
                    </p> 
                    <span key={index}>$<span key={index}>
                        {item.preco}
                    </span></span>
                </Style.Card>
            ))}
        </Style.Content>
        </>
        ))}
      
    </Style.Container>
    </>
)
}
export default Products;