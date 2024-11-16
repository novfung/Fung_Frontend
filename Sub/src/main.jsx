import { createRoot } from "react-dom/client";
import MainPage from "./MainPage.jsx";
import JoinPage from "./Join.jsx";
import Login from "./Login.jsx";
import LoginMain from './LoginMain.jsx'
import MyPage from './Mypage.jsx';
import Add from './Add.jsx';
import AddMain from './AddMain.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/JoinPage" element={<JoinPage />} />
      <Route path="/LM" element={<LoginMain/>}/>
      <Route path='/MyPage' element={<MyPage/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/AddMain' element={<AddMain/>}/>
    </Routes>
  </BrowserRouter>
);
