import { useState } from "react";
import { Button } from "../../FormComponents/Button/style";
import Input from "../../FormComponents/Input";
import { Paragraph } from "../../GeneralComponents/Paragraph";
import { Title } from "../../GeneralComponents/Titles";
import { Container, Form } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { PHP } from "../../../api";
import { useMutation } from "@tanstack/react-query";

const formData = new FormData();

const NewPassword = () => {
  const [pass, setPass] = useState({
    newPass: "",
    verifyPass: "",
  });
  const [samePass, setSamePass] = useState(true);
  const navigate = useNavigate();

  let { emailHash }: any = useParams();

  const { data, mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ["checkHashEmail"],
    mutationFn: async () => await PHP.UserActions(formData),
  });

  if (isSuccess && data) {
    navigate("/login");
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    pass.newPass === pass.verifyPass ? setSamePass(true) : setSamePass(false);
    if (pass.newPass === "" || pass.verifyPass === "") setSamePass(true);
    console.log(pass.newPass, pass.verifyPass, samePass);
    if (
      pass.newPass === pass.verifyPass &&
      pass.newPass.length >= 6 &&
      pass.verifyPass.length >= 6
    ) {
      formData.append("newPass", pass.newPass);
      formData.append("emailHash", emailHash);
      formData.append("functionKey", "5");
      mutate();
    } else if (pass.newPass.length < 6 || pass.verifyPass.length < 6) {
      alert("A senha deve ter ao menos seis caractéres");
    }
  };

  return (
    <Container>
      <>
        <Form>
          <Title style={{ placeSelf: "center", marginBottom: ".6rem" }}>
            Mude sua senha!
          </Title>

          <Paragraph style={{ color: "red" }}>
            Em caso de sucesso, iremos redirecionar você para a página de login.
          </Paragraph>

          <Input
            label="Digite uma nova senha."
            name="newpass"
            onChange={({ target }: any) =>
              setPass((prevState: any) => ({
                ...prevState,
                newPass: target.value,
              }))
            }
            placeholder="Digite uma senha segura"
            type="password"
            value={pass.newPass}
          />
          <Input
            label="Confirme sua senha."
            name="confirmpass"
            onChange={({ target }: any) =>
              setPass((prevState: any) => ({
                ...prevState,
                verifyPass: target.value,
              }))
            }
            placeholder="Igualzinho a anterior, hein!"
            type="password"
            value={pass.verifyPass}
          />

          {!samePass && (
            <>
              <Paragraph style={{ placeSelf: "center", color: "red" }}>
                As senhas devem ser iguais!
              </Paragraph>
            </>
          )}

          <Button onClick={handleSubmit}>Confirmar</Button>
        </Form>
      </>
    </Container>
  );
};

export default NewPassword;
