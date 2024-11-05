import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [form, setForm] = useState({
    title:"",
    content:"",
  });

  const handleChange = e =>{
    const {name, value} = e.target
    setForm((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  const nav = useNavigate()

  const AddButton = () =>{
    if(form.title !== "" && form.content !== ""){
      axios({
        method: "post",
        url: `http://localhost:8080/feed`,
        data: {
          title: form.title,
          content: form.content,
          // image_url: "string",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        alert("추가")
        console.log(result.data)
        nav("/LM",{state :{form:form}});
      })
      .catch((error) => {
        alert("실패")
        console.log(error)
      })
    }else{
      alert("입력해")
    }
  }
  return (
    <div>
      <div>
        <input 
        placeholder="제목" 
        type="text" 
        name="title" 
        onChange={handleChange}/>
        <input 
        placeholder="내용" 
        type="text" 
        name="content" 
        onChange={handleChange}/>
      </div>
      <div>
        <Link to="/LM" style={{ textDecoration: "none" }}>
          <button>취소</button>
        </Link>
        <button onClick={AddButton}>추가</button>
      </div>
    </div>
  );
}

export default Add;
