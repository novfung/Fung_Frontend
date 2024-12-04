import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./component/header";

function Login() {
  const [form, setForm] = useState({
    account_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const nav = useNavigate();
  const LoginButton = () => {
    if (form.account_id !== "" && form.password !== "") {
      axios
        .post(`http://3.36.53.67:8080/users/signin`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("성공", res);
          localStorage.setItem("accessToken", res.data.access_token);
          nav("/LM", { state: { form: form } });
        })
        .catch((error) => {
          console.log("실패", error);
        });
    }
  };
  return (
    <Main>
      <Header />
      <Body>
        <BodyMain>
          <Font>회원가입</Font>
          <IdInput
            placeholder="아이디"
            name="account_id"
            type="text"
            onChange={handleChange}
          />
          <PassInput
            placeholder="비번"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <ButtonDIv>
            <ButtonButton onClick={LoginButton}>버튼</ButtonButton>
          </ButtonDIv>
        </BodyMain>
      </Body>
    </Main>
  );
}

export default Login;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Body = styled.div`
  width: 100%;
  height: 83.2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyMain = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const IdInput = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #eff0f0;
`;
const PassInput = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  background-color: #eff0f0;
`;

const ButtonDIv = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`;

const ButtonButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: #71f2cd;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border-radius: 15px;
`

const Font = styled.div`
  font-size: 30px;
  font-weight: 700;
`