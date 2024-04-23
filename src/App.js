import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from './pages/Home';
import Login from './pages/Login'
import Cart from './pages/Cart.js';
import BookDetailsPage from './pages/BookDetailsPage.js';
import ReceiptPage from './pages/Receipt.js';
import './App.css';
import AdminPage from './pages/Admin.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
