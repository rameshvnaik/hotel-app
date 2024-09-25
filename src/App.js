import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MenuBar from './components/FirstSection/MenuBar';
import Container from './components/Container/Container';
import Displayitem from './components/Card/Displayitem';
import SignInPage from './components/SignInPage/SignInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">




      <Router>
      <NavBar />

        <Routes>

          <Route path="/signIN" element={<SignInPage />} />
          <Route path="/home" element={<Container>
            <MenuBar />
            <Displayitem />



          </Container> } />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
