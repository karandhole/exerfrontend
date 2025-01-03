import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// AOS 
import Aos from "aos";
import "aos/dist/aos.css";

// import HomePage from "./components/pages/HomePage/HomePage.js";
import Register from "./components/pages/Register/Register.js";
import Shop from "./components/pages/Shop/Shop.js";
import { ItemDetails } from "./components/pages/Shop/ShopSections/Item/ItemDetails.js";
import ShopHomePage from "./components/pages/Shop/ShopSections/ShopHomePage/ShopHomePage.js";
import { ProductsListPage } from "./components/pages/Shop/ShopSections/Products/ProductsListPage.js";
// Banners
import Banners1 from './components/pages/Shop/ShopSections/ShopComponents/Banners1.js';
import TWS_Dsk from './components/images/banners/slider6.png';
import TWS_Mob from "./components/images/banners/slider6.png";
// import SoundBars_Dsk from "./components/images/banners/Soundbar_Dsk_001.webp";
// import SoundBars_Mob from './components/images/banners/Soundbar_Mob_001.webp';
import Accesories_Dsk from './components/images/banners/slider5.jpg';
import Accesories_Mob from './components/images/banners/slider5.jpg';
import { Cart } from "./components/pages/Shop/ShopSections/Cart/Cart.js";
import MoreProducts from "./components/pages/Shop/ShopSections/MoreProducts/MoreProducts.js";
import { AdminPage } from "./components/pages/AdminPage/AdminPage.js";
import Contact from "./components/pages/Contactus/Contactus.js";
import { Checkout } from "./components/pages/Shop/ShopSections/CheckOut/CheckOut.js";
import PlaceOrder from "./components/pages/Shop/ShopSections/Cart/PlaceOrder.js";
import Orders from "./components/pages/Shop/ShopSections/Cart/Orders.js";
import { FaFileDownload } from "react-icons/fa";
import success  from "./components/pages/Shop/success.js";
import failed from "./components/pages/Shop/failed.js";
import Success from "./components/pages/Shop/success.js";
import Failed from "./components/pages/Shop/failed.js";


const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const BannerSection = (props) => {
    return(
      <div className="m-0 p-0 ">
          <img src={props.banners[0]} className="img-fluid d-none d-sm-none d-md-block h-100 w-100 rounded-bottom-5" id="banner" alt="banner" />
          <img src={props.banners[1]} className="img-fluid d-sm-block d-md-none h-100 w-100 rounded-bottom-5 " id="banner-sm" alt="banner" />
        </div>
    );
  };

  const Wireless_Banners = [TWS_Dsk, TWS_Mob];
  // const SoundBars_Banners = [SoundBars_Dsk, SoundBars_Mob];
  const Accesories_Banners = [Accesories_Dsk, Accesories_Mob];

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<HomePage />} />*/}

          <Route path="/register" element={<Register />} /> 
          
          <Route path="/" element={<Shop />}>

            <Route index element={<ShopHomePage />} />
           
            <Route path="e-scooter" element={   <ProductsListPage     category="E-Scooter"       /> } />

            {/* <Route path="e-bicycles" element={   <ProductsListPage     category="E-Bicycle"     banner={<BannerSection banners={Wireless_Banners} />}   /> } /> */}
{/* 
            <Route path="sound-bars" element={ <ProductsListPage category="sound-bars" banner={<BannerSection banners={SoundBars_Banners} />} /> } /> */}

            <Route path="accessories" element={ <ProductsListPage category="accessories" banner={<BannerSection banners={Accesories_Banners} />}/>}/>

            <Route path=":category/:name" element={<ItemDetails />} />

            <Route path=":category/:name/cart" element={<Cart />} />

            <Route path="cart" element={<Cart/>} />

            <Route path="more-products" element={<MoreProducts />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="orders" element={<Orders/>} />
            <Route path="/success" element={<Success/>}/>
           <Route path="/failed" element={<Failed/>}/>

          
          </Route>
        
  {/* --------------- Admin page */}
         
          <Route path='/admin' element={<AdminPage/>} />
          <Route path="/admin-page/addproduct" element={<AdminPage />} />
          <Route path="/admin-page/allproducts" element={<AdminPage />} />

        </Routes>        
      </BrowserRouter>
    </>
  );
};

export default App;
