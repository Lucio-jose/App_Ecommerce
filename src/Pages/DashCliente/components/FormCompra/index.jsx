import React from "react";
import * as S from './style'
import Img1 from "../../../../assets/img/5_2.jpg"
import Img from "../../../../assets/img/13-1.jpg"
//import dataprdc, {datavendedor} from "./data";

function Form(){
    return(
        <>
        <S.Container>
            <S.Info>
                <div>
                   <h3>Dados do Vendedor</h3>
                   <span id="spanp">Nome: <span>Ludmila Vendas LDA</span></span>
                   <span id="spanp">Provincia: <span>Luanda</span></span>
                   <span id="spanp">Municipio: <span>Viana</span></span>
                   <span id="spanp">Contacto: <span>92X XXX XXX</span></span>
                   <span id="spanp">IBAN: <span>970567LSA43368</span></span>
                </div>
                <div>
                <h3>Dados do Producto</h3>
                   <span id="spanp">Nome: <span>Lucas Andre Josy</span></span>
                   <span id="spanp">Categoria: <span>Electrodomestico</span></span>
                   <span id="spanp">Preço: <span>$40.000,00</span></span>
                   <span id="spanp">Qntdd em stock: <span>03</span></span>
                   <span id="spanp">Origem: <span>Indiponível</span></span>
                </div>
            </S.Info>
            <S.DivForm>
                <S.DivImgs>
                    <img src={Img} alt="imagem" id="Img1"/>
                    <section>
                        <button>Trocar</button>
                        <img src={Img1} alt="imagem" />
                        <img src={Img1} alt="imagem" />
                        <img src={Img1} alt="imagem" />
                        <button>Trocar</button>
                    </section>
                </S.DivImgs>
                <h3>Preencha o formulário</h3>

                <form action="">
                    <section id="AreaInputs">
                    <div>
                    <input type="text" name="" id="" placeholder="Local"/>
                    <input type="text" name="" id="" placeholder="Quantidade"/>
                    <section>
                    <label htmlFor="">Data de Compra</label>
                    <input type="date" name="" id="" placeholder=""/>
                    </section>
                    </div>
                    
                    <div>
                    <input type="text" name="" id="" placeholder="Contacto"/>
                    <select name="" id="">
                        <option>Tipo de Pagamento</option>
                        <option value="">Cache</option>
                        <option value="">Transferencia</option>
                    </select>
                    <section>
                        <label htmlFor="">Comprovativo</label>
                    </section>
                    <input type="file" name="" id="" />
                    </div>
                    </section>
                    <section id="AreaBtnEnv">
                        <button>Terminar</button>
                    </section>
                </form>
            </S.DivForm>
        </S.Container> 
        </>
    )
}
export default Form;