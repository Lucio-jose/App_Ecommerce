import React, { useState } from "react";
import Search from "./styles";

function AddProducto() {
  const [bar, setBar] = useState("none");
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        +ADD PRODUCTO
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          FECHAR
        </button>
        <h2> Dados do producto </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Nome*</h3>
            <input type="text" name="" id="" />
            </section>

            <section>
            <h3>Categoria*</h3>
            <input type="text" name="" id="" />
            </section>

            <section>
            <h3>Quantidade*</h3>
            <input type="number" name="" id="" />
            </section>
            </fieldset>

            <fieldset>
            <section>
            <h3>Preço*</h3>
            <input type="number" name="" id="" />
            </section>

            <section>
            <h3>Acrescimo de entrega</h3>
            <input type="number" name="" id="" />
            </section>

            <section>
            <h3>Destacar</h3>
            <select name="" id="">
              <option value="">Normal</option>
              <option value="">24h = 5.000</option>
              <option value="">24h = 5.000</option>
              <option value="">24h = 5.000</option>
              <option value="">24h = 5.000</option>
              <option value="">24h = 5.000</option>
            </select>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <input type="text" name="" id="" maxLength="60"/>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionFile">
              <h3>Imagens do Producto*</h3>
            <input type="file"/>
            </section>
            <section className="sectionFile">
              <h3>Pagamento para destacar*</h3>
            <input type="file"/>
            </section>
            </fieldset>
            <button>Adicionar</button>      
        </form>
      </div>
    </Search>
  );
}

export default AddProducto;
