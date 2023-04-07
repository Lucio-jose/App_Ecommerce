import React from "react";
import * as S from './style'
import IMG from '../../images/banner-top-7.jpg'
import Header from "./components/Header";
import ShortBann from "./components/ShortBann";
import Products from "./components/Products";


import Footer from "../../Components/Footer/Footer";
import Parceiros from "../../Components/containerParceiros"

function Client(){
    return(
        <> 
        <S.Top>
          <img src={IMG} alt="Imagem" />
        </S.Top>
        <Header/>
        <S.Container>
          <ShortBann/>
          <Products/>
        </S.Container> 

        <Parceiros/>
        <Footer/>
        </>
    )
}
export default Client;