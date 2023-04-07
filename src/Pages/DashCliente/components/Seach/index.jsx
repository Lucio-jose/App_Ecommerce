import React from "react";
import * as S from './style'
import { Link } from "react-router-dom";

function Seach(){
    return(
        <>
                <S.Seachh>
                    <Link><button>Pesquisar</button></Link>
                    <input type="text" placeholder="Producto"/>
                    <select name="" id="">
                        <option value="">Localização</option>
                        <option value="">Viana</option>
                        <option value="">Cazenga</option>
                        <option value="">Bela</option>
                    </select>
                </S.Seachh>
        </>
    )
}
export default Seach;