import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./component/header";
import styled from "styled-components";

function Join() {
  const [form, setForm] = useState({
    account_id: "",
    password: "",
    interest: "",
    birth: "",
  });

  const handChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "userImg" ? e.target.files[0] : value,
    }));
  };

  const nav = useNavigate();
  const JoinButton = () => {
    if (
      form.account_id !== "" &&
      form.password !== "" &&
      form.interest !== "" &&
      form.birth !== ""
    ) {
      axios
        .post(`http://3.36.53.67:8080/users/signup`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("성공", res);
          nav("/Login", { state: { form: form } });
        })
        .catch((error) => {
          console.log("실패", error);
        });
    } else {
      console.log("모든 필드를 입력하세요");
    }
  };

  return (
    <Main>
      <Header />
      <Body>
        <BodyMain>
          <Font>회원가입</Font>
          <IdInput
            type="text"
            name="account_id"
            value={form.account_id}
            placeholder="로그인"
            onChange={handChange}
          />
          <PassInput
            type="password"
            name="password"
            value={form.password}
            placeholder="비번"
            onChange={handChange}
          />
          <Interest>
            <BirthInput
              type="text"
              name="interest"
              value={form.interest}
              placeholder="관심사"
              onChange={handChange}
            />
            <PassInput
              type="date"
              name="birth"
              value={form.birth}
              placeholder="생일"
              onChange={handChange}
            />
          </Interest>
          <ButtonDIv>
            <ButtonButton onClick={JoinButton}>버튼</ButtonButton>
          </ButtonDIv>
        </BodyMain>
      </Body>
    </Main>
  );
}
export default Join;

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
const BirthInput = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  background-color: #eff0f0;
  margin-right: 20px;
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
`;

const Font = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Interest = styled.div`
  display: flex;
  width: 80%;
`