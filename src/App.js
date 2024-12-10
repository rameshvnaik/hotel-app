import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MenuBar from './components/FirstSection/MenuBar';
import Container from './components/Container/Container';
import Displayitem from './components/Card/Displayitem';
import SignInPage from './components/SignInPage/SignInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import MenuBasedOnTime from './components/Card/MenuBasedOnTime';
import Chef from './components/Chef/ChefPanel';
import AdminControl from './components/AdminPanel/AdminControl.jsx';
import SalesChart from './components/DisplayData/SalesChart.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Container>
            <MenuBar />
            <Displayitem />
          </Container>} />
          <Route path="/menu" element={<Container>
            <MenuBar />
            <MenuBasedOnTime/>
            <Displayitem />
          </Container>} />
          <Route path="/signIN" element={<SignInPage />} />
          <Route path="/chefPanel" element={<Chef />} />
          <Route path="/adminPanel" element={<AdminControl />} />
          <Route path="/salesData" element={<SalesChart />} />






          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
