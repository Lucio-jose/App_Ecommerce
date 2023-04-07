import { Form, Input } from "@rocketseat/unform";
import React from "react";
import * as S from './style'
import { Link } from "react-router-dom";

function Sign(props) {
  //eslint-disable-next-line
  
  return (
    <>
      <S.MainForm>
          <Form>
               <section></section>
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />

              <button type="submit">Login</button>

              <span>
                <Link to="/forgotpassword"> Forgot Password??</Link>
              </span>

              <article></article>

              <Link to="SignUp">Create an Account</Link>
          </Form>
      </S.MainForm>
    </>
  );
}

export default Sign;
