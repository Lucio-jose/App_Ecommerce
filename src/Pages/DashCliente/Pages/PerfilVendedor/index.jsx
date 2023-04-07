import React from "react";
import * as S from './style'
import Header from "../../components/Header";
import ImgPerfil from '../../../../images/career.jpg'
import Icons from '../../../../images/icons-dash/marker.svg'
import { Link } from "react-router-dom";

function PerfilVendedor(){
    return(
        <>
        <Header/>
        <S.Container>
        <S.Content>
            <S.SideLeft>
                <div className="photperfil">
                <img src={ImgPerfil} alt="imgem" />
                </div>
                <h2>Lucas Vendas</h2>
                <ul>
                    <li>
                        <img src={Icons} alt="img" />
                        LUANDA
                    </li>
                    <li>
                        <img src={Icons} alt="img" />
                        VIANA
                    </li>
                    <li> 
                        <img src={Icons} alt="img" />
                        923 218 006
                    </li>
                    <li>
                        <img src={Icons} alt="img" />
                        lucasvendas@gmail.com
                    </li>
                    <li>
                        <img src={Icons} alt="img" />
                        07 / 07 / 2004
                     </li>
                    <li>
                        <img src={Icons} alt="img" />
                        AO2034567889087
                    </li>
                    <li>
                        <img src={Icons} alt="img" />
                        OLX ANGOLA
                    </li>
                </ul>
            </S.SideLeft>
            <S.SideRight>
                <ul className="Nav">
                    <Link to="#"><li>Productos</li></Link>
                    <Link to="#"><li>Historial</li></Link>
                    <Link to="#"><li>Funcionários</li></Link>
                    <Link to="#"><li>Fundação</li></Link>
                    <Link to="#"><li>Seguidores</li></Link>
                    <Link to="#"><li>Testemunhos</li></Link>
                    <Link to="#"><li>Reading...</li></Link>
                    <Link to="#"><li>Reading...</li></Link>
                </ul>
            </S.SideRight>
        </S.Content>
        </S.Container>
        </>
    )
}
export default PerfilVendedor;