import { Form, Input } from "@rocketseat/unform";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import logo from "../../images/logo-1.png";
import api from "../../services/api";
import { login, UserLogado } from "../../services/auth";
import FormTag, { MainForm } from "../../Styles/LogCad";
import { schema } from "../../Validations/CreateAccount";
import { toast } from "react-toastify";

function CreateAccount(props) {
  const [error, setError] = useState("");

  async function handleSubmit(data) {
    PostData(data);
  }

  const notify = () => {
    toast.error("Erro ao Cadastrar: " + error);
  };

  async function PostData(data) {
    await api
      .post("/signup", data)
      .then(async (response) => {
        console.log("Usuario Criado Com sucesso => ", response.data.User);
        await api
          .post("/sessions", data)
          .then((response) => {
            console.log("Usuario Logado com Sucesso => ", response.data);
            const { token, user } = response.data;
            login(token);
            UserLogado(user);
            props.history.push("/");
          })
          .catch(({ response }) => {
            setError(response.data.error);
          });
      })
      .catch(({ response }) => {
        console.warn(response);
        setError(response.data.error);
        notify();
      });
  }

  return (
    <>
      <MainForm>
        <div>
          <Form onSubmit={handleSubmit} schema={schema}>
            <FormTag>
              <img src={logo} alt="Logo em PNG" />
              <Input type="text" name="name" placeholder="User Name" />
              <Input type="email" name="email" placeholder="E-mail" />
              <select name="" id="">
                <option value="Type">Tipo de conta</option>
                <option value="vendedor">Vendedor</option>
                <option value="client">Cliente</option>
              </select>
              <Input type="password" name="password" placeholder="Password" />

              <span>
                <Link to="/forgotpassword">Forgot Password??</Link>
              </span>

              <button type="submit">Create Account</button>
            </FormTag>
          </Form>
        </div>
      </MainForm>
    </>
  );
}

export default CreateAccount;
