import { createRoot } from 'react-dom/client'
import MainPage from './Main/MainPage.jsx'
import LoginPage from './Login/LoginPage.jsx';
import JoinPage from './Join/JoinPage.jsx';
import MyPage from './MyPage/MyPage.jsx';
import LoginMain from './LoginMain/LoginMainPage.jsx'
import Add from './Add/Add.jsx';
import AddMain from './AddMain/AddMain.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';    

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/JoinPage' element={<JoinPage/>}/>
      <Route path='/MyPage' element={<MyPage/>}/>
      <Route path='/LoginMain' element={<LoginMain/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/AddMain' element={<AddMain/>}/>
    </Routes>
  </BrowserRouter>
)
