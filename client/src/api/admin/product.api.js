import api from "../axios";

// ADD PRODUCT
export const addProduct = async (data) => {
  const response = await api.post("/admin/products", data);
  return response.data;
};

// GET ALL PRODUCTS
export const getProducts = async () => {
  const response = await api.get("/admin/products");
  return response.data;
};

// UPDATE PRODUCT
export const updateProduct = async (id, data) => {
  const response = await api.put(`/admin/products/${id}`, data);
  return response.data;
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  const response = await api.delete(`/admin/products/${id}`);
  return response.data;
};
