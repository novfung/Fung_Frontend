import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Join() {
  const [form, setForm] = useState({
    userId:"",
    userPass:""
  })

  const handleChange = e =>{
    const {name, value} = e.target
    setForm((prev) => ({
      ...prev,
      [name] : value,
    }))
  }
  const nav = useNavigate()
  const LoginButton = () =>{
    if(form.userId !== "" && form.userPass !== ""){
      axios({
        method: "post",
        url: `http://localhost:8080/users/signin`,
        data: {
          account_id: form.userId,
          password: form.userPass,
        },
      })
      .then((result) => {
        alert("성공");
        console.log(result.data);
        nav('/LM',{state:{form:form}})
      })
      .catch((error) =>{
        alert("실패")
        console.log(error)
      })
    } else {
      alert("입력하라고")
    }
  }
  return (
    <div>  
      <div>
        <input 
        placeholder="아이디" 
        name="userId"
        type="text"
        onChange={handleChange}/>
        <input 
        placeholder="비번"
        name="userPass"
        type="password"
        onChange={handleChange} 
        />
      </div>
      <button onClick={LoginButton}>버튼</button>
    </div>
  );
}

export default Join;
