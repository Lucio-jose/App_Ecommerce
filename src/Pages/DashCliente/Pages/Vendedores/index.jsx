import React from "react";
import Header from "../../components/Header";
import * as S from "./style"
import data from './data.js'
import { Link } from "react-router-dom";


function Vendedores(){
    return(
        <> 
        <Header/>
        <S.Container>
            <>
            <section className="category-name">
            <h3>Lojas / entidades venda</h3>
            </section>

            <S.Content>
            {data.map((item, index)=>(
                <S.Card key={index}> 
                    <section key={index} id="Testaa">
                       <Link to="/perfilvendedor"><button key={index} id="AddCart"> {item.visit} </button></Link>
                        <Link to="/formcompra"> <button id="btcomprar">Seguir</button> </Link>
                    </section> 
                    <img key={index} src={item.img} />
                    <h2 key={index}>
                        {item.title}
                    </h2>
                    <p key={index}>
                        {item.describe}
                    </p> 
                </S.Card>
            ))}
        </S.Content>
        </>
      
    </S.Container>
        </>
    )
}
export default Vendedores;