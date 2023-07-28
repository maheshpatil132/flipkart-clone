import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header/Header";
import ProductDetials from "./components/productdetials/ProductDetials";
import Produtcs from "./components/Products/Produtcs";
import Cart from "./components/cart/Cart";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Account from "./components/User/Account";
import Wishlist from "./components/Wishlist/Wishlist";
import Orders from "./components/orders/Orders";
import CheckoutOrder from "./components/orders/CheckoutOrder";
import Dashboard from "./components/Admin/Dashboard";
import MainData from "./components/Admin/MainData";
import OrderList from "./components/Admin/OrderList";
import ProductList from "./components/Admin/ProductList";
import CreateProduct from "./components/Admin/CreateProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import UsersList from "./components/Admin/UsersList";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/product/:id" element={<ProductDetials/>}/>
        <Route path="/search" element={<Produtcs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/account/orders" element={<Orders/>}/>
        <Route path="/checkout" element={<CheckoutOrder/>}/>
        <Route path="/admin/dashboard" element={<Dashboard activeTab={0} ><MainData/></Dashboard>}/>
        <Route path="/admin/orders" element={<Dashboard activeTab={1}><OrderList/></Dashboard>}/>
        <Route path="/admin/updateorder" element={<Dashboard activeTab={1}><MainData/></Dashboard>}/>
        <Route path="/admin/products" element={<Dashboard activeTab={2}><ProductList/></Dashboard>}/>
        <Route path="/admin/add-product" element={<Dashboard activeTab={3} ><CreateProduct/></Dashboard>}/>
        <Route path="/admin/update-product/:id" element={<Dashboard activeTab={2} ><UpdateProduct/></Dashboard>}/>
        <Route path="/admin/users" element={<Dashboard activeTab={4}><UsersList/></Dashboard>}/>
        <Route path="/admin/all/reviews" element={<Dashboard activeTab={5}><MainData/></Dashboard>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
