import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
          nav('/Login',{state:{form : form}})
        })
        .catch((error) => {
          console.log("실패", error);
        });
    }else{
      console.log("모든 필드를 입력하세요")
    }
  };

  return (
    <div>
      <input
        type="text"
        name="account_id"
        value={form.account_id}
        placeholder="로그인"
        onChange={handChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="비번"
        onChange={handChange}
      />
      <input
        type="text"
        name="interest"
        value={form.interest}
        placeholder="관심사"
        onChange={handChange}
      />
      <input
        type="date"
        name="birth"
        value={form.birth}
        placeholder="생일"
        onChange={handChange}
      />
      {/* <input name="userImg" type="file" onChange={handChange} />   */}
      <button onClick={JoinButton}>버튼</button>
    </div>
  );
}
export default Join;
