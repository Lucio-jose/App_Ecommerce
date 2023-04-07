import React from "react";
import * as S from './style'

function News(){
    return(
        <>
        <S.Container>
            <section className="category-name">
            <h3>News</h3>
            </section>
            <div id="alldivs">
          <S.Content1>
            <div>
            <h2>Lorem Ipsum</h2>
            </div>
          </S.Content1>
          <S.Content>
            <div>
            <h2>Lorem Ipsum</h2>
            </div>
          </S.Content>
          <S.Content1>
            <div>
            <h2>Lorem Ipsum</h2>
            </div>
          </S.Content1>
          </div>
        </S.Container>
        </>
    )
}
export default News;