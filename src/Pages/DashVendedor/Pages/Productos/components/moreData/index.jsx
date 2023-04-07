import React, { useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/contact-bg.jpg"

function MoreData() {
  const [bar, setBar] = useState("none");
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        View
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          AMX
        </button>
        <h2> Dados do producto </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Nome do Producto*</h3>
            <span contentEditable="true">IPhone11</span>
            </section>

            <section>
            <h3>Categoria*</h3>
            <span contentEditable="true">Electronicos</span>
            </section>

            <section>
            <h3>Quantidade*</h3>
            <span contentEditable="true">05</span>
            </section>
            </fieldset>

            <fieldset>
            <section>
            <h3>Preço*</h3>
            <span contentEditable="true">$10.000</span>
            </section>

            <section>
            <h3>Acrescimo de entrega</h3>
            <span contentEditable="true">$0.000</span>
            </section>

            <section>
            <h3>Destacar</h3>
            <span contentEditable="true">Normal</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <span contentEditable="true">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, minima. Alias laboriosam ad, fuga impedit iste animi inventore maiores quos reiciendis laborum consectetur deserunt consequatur, nostrum corrupti aliquid ut ipsam?</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionFile">
              <h3>Imagens do Producto*</h3>
              <div>
               <img src={Img} alt="" />
               <img src={Img} alt="" />
               <img src={Img} alt="" />
              </div>
            </section>
            </fieldset>
            <div className="Btns">
            <button>Editar</button> 
            <button>Eliminar</button>  
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default MoreData;
