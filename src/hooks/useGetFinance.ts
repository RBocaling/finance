import { useQuery } from "@tanstack/react-query"
import { getFinanceApi } from "../api/dashboardApi";

const useGetFinance = () => {
     const {
       data,
       isLoading,
       isError,
     } = useQuery({
       queryKey: ["get-finance"],
       queryFn: getFinanceApi,
     });
    
    return { data, isLoading, isError };
}

export default useGetFinance;