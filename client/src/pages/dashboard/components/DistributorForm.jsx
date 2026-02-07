import { useEffect, useState } from "react";

const DistributorForm = ({ initialData, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    status: "active",
  });

  /* ========== EDIT MODE ME DATA FILL ========== */
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        password: "", // password edit me blank hi rakhenge
        status: initialData.status || "active",
      });
    }
  }, [initialData]);

  /* ========== HANDLE CHANGE ========== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ========== SUBMIT ========== */
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.name || !form.email || !form.phone) {
      alert("Name, Email aur Phone required hai");
      return;
    }

    // Add ke time password required
    if (!initialData && !form.password) {
      alert("Password required hai");
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-xl">
      <h2 className="text-xl font-black text-slate-800 mb-6">
        {initialData ? "Edit Distributor" : "Add Distributor"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME */}
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Distributor Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm"
            placeholder="Enter name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm"
            placeholder="Enter email"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm"
            placeholder="Enter phone"
          />
        </div>

        {/* PASSWORD (ONLY ADD MODE) */}
        {!initialData && (
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2 text-sm"
              placeholder="Set password"
            />
          </div>
        )}

        {/* STATUS */}
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white text-sm font-black rounded-xl hover:bg-indigo-700"
          >
            {initialData ? "Update Distributor" : "Add Distributor"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 border border-slate-300 text-slate-600 text-sm font-black rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DistributorForm;
