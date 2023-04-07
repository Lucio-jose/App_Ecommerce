import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import ImgPerfil from '../../../../images/career.jpg'
import { Link } from "react-router-dom";
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import { dataV } from './data';

function Perfil() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
              <HeadDash/>
              <S.Container>
        <S.Content>
            <S.SideLeft>
                <div className="photperfil">
                <img src={ImgPerfil} alt="imgem" />
                </div>
                <h2 contentEditable="true">Lucas Vendas</h2>
                <ul>
                    {dataV.map((item, index)=>(
                        <>
                        <li key={index} contentEditable="true">    
                            <img key={index} src={item.img}/>
                            {item.desc} 
                        </li>
                        </>
                    ))}
                   
                </ul>
                <button>Alterar</button>
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
                </ul>
            </S.SideRight>
        </S.Content>
        </S.Container>
            </BodyDash>
        </Container>
      </>
  );
}
export default Perfil;
