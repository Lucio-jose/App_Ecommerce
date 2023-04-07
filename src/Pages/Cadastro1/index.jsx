
import React from 'react';
import { Form, Input } from "@rocketseat/unform";
import{Link} from 'react-router-dom';
import * as S from './style'
import Logo from '../../images/icons-dash/matomo.svg'

function Cadastro() {
  return (
    <>
    <S.Container>
      <S.Content>
      <S.SideLeft>
           <Link to="/"><img src={Logo} alt="LogoTipo" /></Link> 
            <h4>Olá Parceiro</h4>
            <span>
                Já tens uma conta no mercadão? então click em Login e desfrute das nossas funcionalidades
            </span>
            <Link to="/Sign"> <button>Login</button> </Link>
        </S.SideLeft>
        <S.SideRigth>
         <h4>Cadastro</h4>
         <Form action="" method="post">
          <fieldset>
            <legend>Preenche os Dados</legend>
            <div>
            <Input type="text" name="" id="Inputs-Text" placeholder='Nome*'/>
            <select name="" id="Inputs-Text">
              <option value="Provincia">Provincia</option>
              <option value="Luanda">Luanda</option>
              <option value="Huambo">Huambo</option>
              <option value="Benguela">Benguela</option>
            </select>
            <select name="" id="Inputs-Text">
              <option value="Municipios">Municipios</option>
              <option value="Viana">Viana</option>
              <option value="Belas">Belas</option>
              <option value="Benguela">Benguela</option>
            </select>
            
            </div>
            <div>
            <Input type="text" name="" id="Inputs-Text" placeholder='Número*' maxLength="9" />
            <Input type="text" name="" id="Inputs-Text" placeholder='Senha*'/>
            
            <select name="" id="Inputs-Text">
              <option value="Empreenderdor">Tipo de conta</option>
              <option value="Empreenderdor">Client</option>
              <option value="Client">Vendedor</option>
            </select>
            </div>
          </fieldset>
          <button>Acessar</button>
         </Form>
        </S.SideRigth>
      </S.Content>
    </S.Container>
    </>
  );
}
export default Cadastro;
