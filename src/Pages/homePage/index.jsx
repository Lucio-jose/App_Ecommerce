import React from "react";
import HeaderTop from "../../Components/headerTop";
import Banner from "../../Components/Banner";
import Products from "../../Components/Products";
import News from "../../Components/News"; 
import Parceiros from "../../Components/containerParceiros";
import Footer from "../../Components/Footer/Footer";

function Home(){
    return(
        <>
        <HeaderTop/>
        <Banner/>
        <News/> 
        <Products/> 
        <Parceiros/>
        <Footer/>
        </>
    )
}
export default Home;