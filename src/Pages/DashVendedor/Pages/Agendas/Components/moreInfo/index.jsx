import React, { useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/contact-bg.jpg"

function MoreInfo() {
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
          Close
        </button>
        <h2> Dados da agenda </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Nome do Producto*</h3>
            <input type="text" value="IPhone11"/>
            </section>

            <section>
            <h3>Quantidade*</h3>
            <input type="text" value="01"/>
            </section>

            <section>
            <h3>Preço*</h3>
            <input type="text" value="$10.000"/>
            </section>
            </fieldset>

            <fieldset>
            <section>
            <h3>Nome do CLiente*</h3>
            <input type="text" value="Laurindo Rogério"/>
            </section>

            <section>
            <h3>Local de entrega</h3>
            <input type="text" value="Viana - Alimenta Angola"/>
            </section>

            <section>
            <h3>Contacto</h3>
            <span>92X XXX XXX</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Pdf Comprovativo</h3>
            <input type="text" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, atque."/>
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
            <button>Eliminar</button>  
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default MoreInfo;
