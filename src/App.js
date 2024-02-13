import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HeaderBurger from './paginas/inicio/headerBurguer/HeaderBurger'; 
import Escaneo from './paginas/escaneo/Escaneo';
import Bienvenida from './paginas/bienvenida/Bienvenida';
import Login from './paginas/login/Login';
import Registo from './paginas/registro/Registo';
import Favoritos from './paginas/favoritos/Favoritos';
import Diario from './paginas/diario/Diario';
import Inicio from './paginas/inicio/Inicio'
// import FooterNavegacion from './paginas/inicio/footerNavegacion/FooterNavegacion';
import Terminos from './paginas/terminos/Terminos';
import Traductor from './paginas/traductor/Traductor';





function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderBurger/> */}
        <Routes>
          
          <Route path='/escaneo' element={<Escaneo/>}></Route>
          <Route path='/bienvenida' element={<Bienvenida/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registo/>}></Route>
          <Route path='/favoritos' element={<Favoritos/>}></Route>
          <Route path='/diario' element={<Diario/>}></Route>
          <Route path='/compartir' element={<Diario/>}></Route>
          <Route path='/terminos' element={<Terminos/>}></Route>
          <Route path='/traductor' element={<Traductor/>}></Route>
          <Route path='/' element={<Inicio/>}></Route>
        </Routes>
        {/* <FooterNavegacion></FooterNavegacion> */}
      </BrowserRouter>
    </>
  );
}

export default App;
