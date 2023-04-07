
import React from 'react';
import { Form, Input } from "@rocketseat/unform";
import{Link} from 'react-router-dom';
import * as S from './style'
import Logo from '../../images/icons-dash/matomo.svg'

function Sign() {
  return (
    <>
    <S.Container>
      <S.Content>
        <S.SideLeft>
           <Link to="/"><img src={Logo} alt="LogoTipo" /></Link> 
            <h4>Olá Parceiro</h4>
            <span>
                Ainda não tens uma conta no mercadão? Click logo em cadastrar-se, e crie a sua conta, de forma fácil e rápida
            </span>
            <Link to="/Signup"> <button>Cadastra-se</button> </Link>
        </S.SideLeft>
        <S.SideRigth>
          <h3>Login</h3>
          <Form action="" method="post">
            <Input type="number" name="" id="" placeholder='Numero:' />
            <Input type="password" name="" id="" placeholder='Password'/>
            <button>Acessar</button>
          </Form>
        </S.SideRigth>
      </S.Content>
    </S.Container>
    </>
  );
}
export default Sign;
