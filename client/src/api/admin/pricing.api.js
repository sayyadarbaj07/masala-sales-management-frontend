import api from "../axios";

// SET / UPDATE PRODUCT PRICING
export const setProductPricing = async (productId, data) => {
  const response = await api.post(`/admin/products/${productId}/pricing`, data);
  return response.data;
};

// GET PRODUCT PRICING
export const getProductPricing = async (productId) => {
  const response = await api.get(`/admin/products/${productId}/pricing`);
  return response.data;
};
