import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./component/header";
import styled from "styled-components";

function Add() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    key: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nav = useNavigate();

  const AddButton = () => {
    if (form.title !== "" && form.content !== "") {
      const accessToken = localStorage.getItem("accessToken");
      const feeds = JSON.parse(localStorage.getItem("feeds")) || [];
      const newKey =
        feeds.length > 0 ? Math.max(...feeds.map((feed) => feed.key)) + 1 : 1;
      const newFeed = { ...form, key: newKey };
      axios
        .post(`http://3.36.53.67:8080/feed`, JSON.stringify(newFeed), {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log("성공", res);
          feeds.push(newFeed);
          nav("/LM");
          localStorage.setItem("feeds", JSON.stringify(feeds));
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
          <Font>추가</Font>
          <TitleInput
            placeholder="제목"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <ContentInput
            placeholder="내용"
            type="text"
            name="content"
            value={form.content}
            onChange={handleChange}
          />
          <ButtonDIv>
            <Link to="/LM" style={{ textDecoration: "none" }}>
              <ButtonButton>취소</ButtonButton>
            </Link>
            <ButtonButton onClick={AddButton}>추가</ButtonButton>
          </ButtonDIv>
        </BodyMain>
      </Body>
    </Main>
  );
}

export default Add;

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

const TitleInput = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #eff0f0;
`;
const ContentInput = styled.input`
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
  justify-content: space-between;
`;

const ButtonButton = styled.button`
  width: 80px;
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
