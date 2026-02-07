import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Products from "../pages/products/Products";
import AppLayout from "../layout/AppLayout";
import Orders from "../pages/orders/Orders";
import CreateOrder from "../pages/orders/CreateOrder";
import OrderDetails from "../pages/orders/OrderDetails";
import Reports from "../pages/reports/Reports";
import Dashboard from "../pages/dashboard/Dashboard";
import DistributorDashboard from "../pages/dashboard/DistributorDashboard";
import SubDistributorDashboard from "../pages/dashboard/SubDistributorDashboard";
import Register from "../pages/auth/Register";

const AppRoutes = () => {
  const isLoggedIn = true; // dummy for now

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {isLoggedIn ? (
          <Route element={<AppLayout />}>
            {/* 🔥 SINGLE DASHBOARD ROUTE */}
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/create" element={<CreateOrder />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/reports" element={<Reports />} />
            <Route
              path="/distributor-dashboard"
              element={<DistributorDashboard />}
            />
            <Route
              path="/subdistributor-dashboard"
              element={<SubDistributorDashboard />}
            />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
