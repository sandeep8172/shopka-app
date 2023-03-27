import "./App.css";
import HomePage from "./components/homePage/HomePage";
import Welcome from "./components/welcomePage/Welcome";
import OrderDetails from "./components/orderDetailsPage/OrderDetails";
import { Routes, Route } from "react-router-dom";
import AddressPage from "./components/addressPage/AddressPage";
import Checkout from "./components/checkOutPage/Checkout";
import SuccessOrder from "./components/successOrder/SuccessOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/orderDetail" element={<OrderDetails />} />
      <Route path="/home/orderDetail/address" element={<AddressPage />} />
      <Route path="/home/orderDetail/address/checkout" element={<Checkout />} />
      <Route path="/home/orderDetail/address/checkout/success" element={<SuccessOrder />} />

    </Routes>
  );
}

export default App;
