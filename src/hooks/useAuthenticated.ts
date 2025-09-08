import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../api/auth";

const useAuthenticate =  () => {
  const { data, isLoading } = useQuery({
    queryFn: getAuth,
    queryKey: ["get-auth"],
  });
    
    return { data: data, isLoading: isLoading };
};

export default useAuthenticate;
