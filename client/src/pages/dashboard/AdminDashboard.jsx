import AdminStats from "./components/AdminStats";
import DistributorTable from "./components/DistributorTable";
import RecentOrders from "./components/RecentOrders";
import AdminPendingActions from "./components/AdminPendingActions";
import AdminSalesChart from "./components/AdminSalesChart";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Today Sales", value: "₹12,500" },
    { title: "Monthly Sales", value: "₹2,45,000" },
    { title: "Total Orders", value: "184" },
    { title: "Active Distributors", value: "8" },
  ];

  const distributorSales = [
    { name: "Distributor A", today: "₹5,200", month: "₹82,000", orders: 48 },
    { name: "Distributor B", today: "₹4,100", month: "₹71,500", orders: 39 },
    { name: "Distributor C", today: "₹3,200", month: "₹58,000", orders: 31 },
  ];

  const orders = [
    {
      id: "ORD101",
      distributor: "Distributor A",
      status: "Pending",
      amount: "₹1,200",
    },
  ];

  return (
    <div className="space-y-12">
      <AdminStats stats={stats} />

      <section className="bg-white rounded-2xl border p-6">
        <AdminSalesChart />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AdminPendingActions />
        <RecentOrders orders={orders} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-extrabold text-slate-800">
            Distributor Performance
          </h2>

          {/* ✅ CORRECT ADD BUTTON */}
          <button
            onClick={() => navigate("/admin/manage-distributors")}
            className="px-4 py-2 bg-indigo-600 text-white text-xs font-black rounded-lg"
          >
            + Add Distributor
          </button>
        </div>

        <DistributorTable distributors={distributorSales} />
      </section>
    </div>
  );
};

export default AdminDashboard;
