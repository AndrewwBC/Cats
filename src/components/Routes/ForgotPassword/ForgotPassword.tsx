import React, { useState } from "react";
import { PHP, UserRequirements } from "../../../api";
import { Button } from "../../FormComponents/Button/style";
import Input from "../../FormComponents/Input";
import { Container, Content } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { Title } from "../../GeneralComponents/Titles";
import { Paragraph } from "../../GeneralComponents/Paragraph";

const emailIsValid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { data, isLoading, mutate, isError, isSuccess }: any = useMutation({
    mutationKey: ["resetPass"],
    mutationFn: () => PHP.emailToChangePass(email),
  });

  document.title = "Recuperar Senha";
  function handleSubmit(e: any) {
    e.preventDefault();
    mutate();
  }

  console.log(data);

  return (
    <Container>
      <Content>
        <form style={{ display: "grid" }}>
          <Title>Recupere sua senha!</Title>
          <Paragraph style={{ margin: "18px 0px" }}>
            Enviaremos um e-mail para você!
          </Paragraph>
          <Input
            label={data === 404 ? "Email não cadastrado!" : "E-mail"}
            name="resetinput"
            value={email}
            onChange={({ target }: any) => setEmail(target.value)}
            placeholder="Insira o seu email"
            type="text"
          />
          <Button
            style={{ placeSelf: "center", margin: "16px 0px" }}
            type="submit"
            disabled={isLoading ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Recuperar senha
          </Button>
          <Paragraph
            style={
              data && data.status === 200
                ? { color: "green", margin: "0 auto" }
                : { color: "red", margin: "0 auto" }
            }
          >
            {data && data.data.message}
          </Paragraph>
        </form>
      </Content>
    </Container>
  );
};
export default ForgotPassword;
