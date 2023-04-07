
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import AddProducto from '../../Components/AddProducto';
import Sucess ,{Agenda} from './data';
import MoreInfo from './Components/moreInfo';

function Agendas() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
              <HeadDash/>
                <S.AreaTitle>
                  <S.Content>
                  <h3>Todos os Productos</h3>
                  <AddProducto/>
                  </S.Content>
                </S.AreaTitle>
                
                <S.Container>
                  <S.SideLeft>
                    <h3>Bem sucessidas</h3>

                    {Sucess.map((item, index)=>(
                      <div key={index}>
                      <img key={index} src={item.img}/>
                      <section>
                        <h5 key={index}> {item.producto} </h5>
                        <span key={index}>
                          {item.data}
                        </span>
                      </section>
                    </div>  
                    ))
                    
                    }
                  </S.SideLeft>
                  <S.SideRight>
                    <h3>Agendas Pendentes</h3>
                    {
                      Agenda.map((item, index)=>(
                        <div key={index} className="DescAgenda">
                        <section key={index}>
                          <span key={index}>Desde: {item.desde}</span>
                          <span key={index}>Para: {item.ate}</span>
                        </section>
                        <section id='center' key={index}>
                          <h5 key={index}>{item.user}</h5>
                          <span key={index}>{item.prodct}</span>
                        </section>
                        <section key={index}>
                          <button key={index} id="btnfinish">{item.bnt}</button>
                          <MoreInfo/>
                        </section>
                      </div>
                      ))
                    }
                  </S.SideRight>
                </S.Container>
            </BodyDash>
        </Container>
      </>
  );
}
export default Agendas;
