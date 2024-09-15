import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth-view/login";
import AuthRegistration from "./pages/auth-view/register";
import AdminLayout from "./components/admin-component/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-component/layout";
import PageNotFound from "./pages/404-view";
import Checkout from "./pages/shopping-view/checkout";
import ShoppingHomePage from "./pages/shopping-view/home";
import ShoppingProduct from "./pages/shopping-view/product-listing";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/** Common components */}

      {/** Routing components */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegistration />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>

        {/**Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/**Shopping Routes */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="home" element={<ShoppingHomePage />} />
          <Route path="products" element={<ShoppingProduct />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>

        {/**Page Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
