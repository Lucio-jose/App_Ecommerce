import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/homePage";
//import Login from "../Pages/Login";

import Sign from "../Pages/Login1";
import Cadastro from "../Pages/Cadastro1";

import DashV from "../Pages/DashVendedor";
import Productos from "../Pages/DashVendedor/Pages/Productos";
import Agendas from "../Pages/DashVendedor/Pages/Agendas";
import Perfil from "../Pages/DashVendedor/Pages/Perfil";

import Client from "../Pages/DashCliente";
import Pesquisas from "../Pages/DashCliente/Pages/Pesquisas";
import FormCompra from "../Pages/DashCliente/Pages/FormCompra";
import Vendedores from "../Pages/DashCliente/Pages/Vendedores";
import PerfilVendedor from "../Pages/DashCliente/Pages/PerfilVendedor";

function Routes() {
  return (
    <Switch> 
 
      <Route exact path="/" component={Home} />
      <Route path="/Sign" component={Sign}/>
      <Route path="/Signup" component={Cadastro}/>

      <Route path="/dashvendedor" component={DashV}/>
      <Route path="/dashvendedorprod" component={Productos}/>
      <Route path="/dashagendas" component={Agendas}/> 
      <Route path="/profile" component={Perfil}/> 

      <Route path="/dashclient" component={Client}/> 
      <Route path="/dashpesquisa" component={Pesquisas}/> 
      <Route path="/formcompra" component={FormCompra}/>  
      <Route path="/lojas" component={Vendedores}/>  
      <Route path="/perfilvendedor" component={PerfilVendedor}/>  
 
    </Switch> 
  );
}

export default Routes;
