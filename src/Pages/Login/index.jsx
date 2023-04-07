import { Form, Input } from "@rocketseat/unform";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import logo from "../../images/logo-1.png";
import api from "../../services/api";
import { login, UserLogado } from "../../services/auth";
import FormTag, { MainForm } from "../../Styles/LogCad";
import { schema } from "../../Validations/Login";
import { toast } from "react-toastify";

function Login(props) {
  //eslint-disable-next-line
  const [error, setError] = useState("");

  async function handleSubmit(data) {
    PostData(data);
  }
 
  const notify = () => {
    toast.error("Email ou Password Inválido.!");
  };

  async function PostData(data) {
    const response = await api
      .post("/sessions", data)
      .then(console.log("Sucesso ao Enviar => ", data))
      .catch(({ response }) => {
        console.warn(response);
        setError(response.data.error);
        notify();
      });

    if (response) {
      console.log("Sucesso ao Receber Dados => ", response.data);
      const { token, user } = response.data;
      login(token);
      UserLogado(user);

      user.email === "about@vocation.com"
        ? props.history.push("/admin")
        : props.history.push("/");
    }
  }

  return (
    <>
      <MainForm>
        <div>
          <Form onSubmit={handleSubmit} schema={schema}>
            <FormTag>
              <img src={logo} alt="Logo em PNG" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />

              <button type="submit">Login</button>

              <span>
                <Link to="/forgotpassword"> Forgot Password??</Link>
              </span>

              <article></article>

              <Link to="SignUp">Create an Account</Link>
            </FormTag>
          </Form>
        </div>
      </MainForm>
    </>
  );
}

export default Login;
