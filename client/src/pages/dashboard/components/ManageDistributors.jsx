import { useState } from "react";
import DistributorTable from "../../components/DistributorTable";
import DistributorForm from "../../components/DistributorForm";

const ManageDistributors = () => {
  /* ================= STATE (DUMMY DATA) ================= */
  const [distributors, setDistributors] = useState([
    {
      _id: "1",
      name: "Distributor A",
      email: "a@gmail.com",
      phone: "9999999999",
      status: "active",
      today: "₹5,200",
      month: "₹82,000",
      orders: 48,
    },
    {
      _id: "2",
      name: "Distributor B",
      email: "b@gmail.com",
      phone: "8888888888",
      status: "active",
      today: "₹4,100",
      month: "₹71,500",
      orders: 39,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  /* ================= ADD ================= */
  const handleAddClick = () => {
    setEditData(null);
    setShowForm(true);
  };

  const handleAddDistributor = (data) => {
    setDistributors((prev) => [
      ...prev,
      {
        _id: Date.now().toString(),
        ...data,
        today: "₹0",
        month: "₹0",
        orders: 0,
      },
    ]);
    setShowForm(false);
  };

  /* ================= EDIT ================= */
  const handleEditClick = (dist) => {
    setEditData(dist);
    setShowForm(true);
  };

  const handleEditDistributor = (data) => {
    setDistributors((prev) =>
      prev.map((d) => (d._id === editData._id ? { ...d, ...data } : d)),
    );
    setEditData(null);
    setShowForm(false);
  };

  /* ================= DELETE ================= */
  const handleDeleteDistributor = (id) => {
    if (!window.confirm("Are you sure you want to delete this distributor?"))
      return;

    setDistributors((prev) => prev.filter((d) => d._id !== id));
  };

  /* ================= RENDER ================= */
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-800">
          Manage Distributors
        </h1>

        <button
          onClick={handleAddClick}
          className="px-5 py-2 bg-indigo-600 text-white text-sm font-black rounded-xl hover:bg-indigo-700"
        >
          + Add Distributor
        </button>
      </div>

      {/* ADD / EDIT FORM */}
      {showForm && (
        <DistributorForm
          initialData={editData}
          onCancel={() => {
            setShowForm(false);
            setEditData(null);
          }}
          onSubmit={editData ? handleEditDistributor : handleAddDistributor}
        />
      )}

      {/* TABLE */}
      <DistributorTable
        distributors={distributors}
        onEdit={handleEditClick}
        onDelete={handleDeleteDistributor}
      />
    </div>
  );
};

export default ManageDistributors;
