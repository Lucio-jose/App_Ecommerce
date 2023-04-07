
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import data, {categoriadata} from './data/index' ;
import AddProducto from '../../Components/AddProducto';
import MoreData from './components/moreData';

function Productos() {
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
                <S.ContainerProducts>
                {categoriadata.map((item_, index_)=>( 
            <>
            <section key={index_} className="category-name">
            <h4 key={index_}> {item_.desc} </h4>
            </section>
 
            <S.ContentProducts key={index_}>
            {data.map((item, index)=>(
                <S.CardProductos key={index}>
                  <div key={index}>
                    <h5 key={index}>
                        {item.title}
                    </h5>
                    <span key={index}>$<span key={index}>
                        {item.preco}
                    </span></span>
                    <h6 key={index}>
                        {item.qntdd}
                    </h6> 
                    </div>
                    <div key={index}>
                      <MoreData/>
                    </div>
                </S.CardProductos>
            ))}
        </S.ContentProducts>
        </>
        ))}
      
                </S.ContainerProducts>
                <span>Ola mundos</span>
            </BodyDash>
        </Container>
      </>
  );
}
export default Productos;
