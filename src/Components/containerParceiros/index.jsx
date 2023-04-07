import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom';

function Parceiros(){
 return(
    <>
    <S.Container>
    <section className="category-name">
            <Link to="/Ola"> Ola Mundo</Link>
            <h3>Nossos Parceiros</h3>
    </section> 
        <S.Content>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </S.Content>
    </S.Container>
    </>
 )
}
export default Parceiros;