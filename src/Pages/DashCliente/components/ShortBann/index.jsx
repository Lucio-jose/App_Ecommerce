import React from "react";
import * as S from './style'
import Img from '../../../../images/banner75.png'
import Img1 from '../../../../images/icons-dash/samsung-memory-XB4F9V5UleA-unsplash.jpg'

function ShortBann(){
    return(
        <>
        <S.ContentShort>
            <div>
                <img src={Img} alt="imagem" />
            </div>
            <section>
                <img src={Img1} alt="imagem" />
            </section>
        </S.ContentShort>
        </>
    )
}
export default ShortBann;