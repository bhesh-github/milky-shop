import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import CustomerCare from "./components/pages/CustomerCare";
import TrackMyOrder from "./components/pages/TrackMyOrder";
import SingleProduct from "./components/singleProductComponents/SingleProduct";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import SaleOnMilky from "./components/pages/SaleOnMilky";
import UserProfile from "./components/pages/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/saleOnMilky" element={<SaleOnMilky />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/trackMyOrder" element={<TrackMyOrder />} />
            <Route path="/customerCare" element={<CustomerCare />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
