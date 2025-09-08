import api from "../services/api.service";

export const getFinanceApi = async () => {
  try {
    const response = await api.get('/calling-finance');
    return response.data;
  } catch (error: any) {
    console.log("error2", error.message);
  }
};

