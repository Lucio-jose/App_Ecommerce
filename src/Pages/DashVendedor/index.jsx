
import React from 'react';
import * as S from './style/style'
import Menu from './Components/Menu';
import HeadDash from './Components/HeadDash';
import Cards from './Components/Cards';
import Estatistica from './Components/Estatistica';
import SmallNotify from './Components/SmallNotificacao';

function DashV() {
  return (
    <S.Container>
     <Menu/>
      <S.BodyDash>
        <HeadDash/> 
        <Cards/>
        <SmallNotify/>
        <Estatistica/>
        <span>
          Ola mundão
        </span>
      </S.BodyDash>
    </S.Container>
  );
}
export default DashV;
