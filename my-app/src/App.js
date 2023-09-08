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
import PaymentSucess from "./components/orders/PaymentSucess";
import OrderDetial from "./components/orders/OrderDetial";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Clear_Errors, LoadUser } from "./actions/UserActions";
import Invoice from "./components/Invoice/Invoice";
import ProtectedRoutes from "./Routes/ProtectedRoutes";



function App() {
  
   const dispatch = useDispatch();

   useEffect(()=>{
     
     dispatch(LoadUser())

    
   },[dispatch])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
  
        <Route path="/invoice/:id" element={ <ProtectedRoutes> <Invoice/> </ProtectedRoutes> }/>
        <Route path="/product/:id" element={<ProductDetials/>}/>
        <Route path="/search" element={<Produtcs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={ <ProtectedRoutes><Account/></ProtectedRoutes>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/account/orders" element={ <ProtectedRoutes><Orders/></ProtectedRoutes>}/>
        <Route path="/account/order/:id" element={<ProtectedRoutes><OrderDetial/></ProtectedRoutes>}/>
        <Route path="/checkout" element={<CheckoutOrder/>}/>
        <Route path="/paymentsucess" element={<ProtectedRoutes><PaymentSucess/></ProtectedRoutes>}/>
        <Route path="/admin/dashboard" 
         element={ <ProtectedRoutes>
                     <Dashboard activeTab={0} >
                       <MainData/>
                      </Dashboard>
                    </ProtectedRoutes>}
        />

        <Route path="/admin/orders" 
        element={
              <ProtectedRoutes>
                <Dashboard activeTab={1}>
                  <OrderList/>
                </Dashboard>
              </ProtectedRoutes>}
        />
        <Route path="/admin/updateorder" 
        element={
                  <ProtectedRoutes>
                    <Dashboard activeTab={1}>
                      <MainData/>
                    </Dashboard>
                  </ProtectedRoutes>
                    }
        />
        <Route path="/admin/products" 
        element={
            <ProtectedRoutes>
              <Dashboard activeTab={2}>
                <ProductList/>
              </Dashboard>
            </ProtectedRoutes>
        }/>
        <Route path="/admin/add-product" 
        element={
          <ProtectedRoutes>
                <Dashboard activeTab={3} >
                  <CreateProduct/>
                </Dashboard>
          </ProtectedRoutes>
        }/>

        <Route path="/admin/update-product/:id" 
        element={
            <ProtectedRoutes>
              <Dashboard activeTab={2} >
                <UpdateProduct/>
              </Dashboard>
            </ProtectedRoutes>
      }/>

        <Route path="/admin/users" 
        element={
              <ProtectedRoutes>
                <Dashboard activeTab={4}>
                  <UsersList/>
                </Dashboard>
              </ProtectedRoutes>
      }/>
        <Route path="/admin/all/reviews" 
        element={
          <ProtectedRoutes>
            <Dashboard activeTab={5}>
              <MainData/>
              </Dashboard>
          </ProtectedRoutes>
      }/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
