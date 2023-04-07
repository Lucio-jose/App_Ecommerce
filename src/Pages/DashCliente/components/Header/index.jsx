import React from "react";
import * as S from './style'
import { Link } from "react-router-dom";
import Seach from "../Seach";
import Img from '../../../../images/avatar.png'
import { menutop, menucategory } from "./data";

function Header(){
    return(
        <>
        <S.Container>
            <S.Content>
                <S.States>
                    {
                        menutop.map((item, index)=>(
                            <div key={index}>
                                <span key={index}> {item.num} </span>
                                <Link key={index}> {item.desc} </Link>
                            </div>
                        ))
                    }
                </S.States>
                <Seach/>
                <section> 
                    <h3>Lúcio José Canga</h3>
                    <img src={Img}  alt="Imagem"/>
                </section>
            </S.Content>
            <S.Content1>
                <div>
                    <select name="" id="">
                        <option value="">Portugues</option>
                        <option value="">Englis</option>
                        <option value="">France</option>
                    </select>
                    <select name="" id="">
                        <option value="">Kwanza</option>
                        <option value="">Dolar</option>
                        <option value="">Euro</option>
                    </select>
                </div>
                <ul>
                    {
                    menucategory.map((item, index)=>(
                        <Link key={index} to={item.path}> {item.desc} </Link>
                    ))}
                </ul>
            </S.Content1>
        </S.Container>
        </>
    )
}
export default Header;