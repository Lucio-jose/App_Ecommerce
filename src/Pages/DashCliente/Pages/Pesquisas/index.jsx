import React from "react";
import Header from "../../components/Header";
import Products from "../../../../Components/Products";
import * as S from "./style"

function Pesquisas(){
    return(
        <> 
        <Header/>
        <S.Container>
            <S.Content>
            <span>Sem correspondencia</span>
            </S.Content>
        </S.Container>
        <Products/> 
        </>
    )
}
export default Pesquisas;