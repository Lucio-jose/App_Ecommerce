import React, { useState } from "react";
import * as S from './style'
import datamenu from "./data/dataMenu";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HeaderTop(){
    const [data,setData]=useState([])

    useEffect(()=>{
        
            setData(datamenu)
    },[data])
    return(
        <>
        <S.Container>
            <S.Menu>
                <ul>
                    {data.map((item, index)=>(
                        <Link key={index} to={item.path}> {item.describe} </Link>
                    ))}
                </ul>
            </S.Menu> 
            <S.LoginCat>
               <Link>A</Link>
               <Link>B</Link>
            </S.LoginCat>
            <S.Btns>
               <Link to="/Sign">Login</Link>
               <Link to="/Signup">Registrar-se</Link>
            </S.Btns>
        </S.Container>
        </>
    )
}
export default HeaderTop;