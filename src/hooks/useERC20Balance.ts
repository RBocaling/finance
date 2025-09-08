import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ERC20_ABI from "../abi/ERC20ABI.json"


export function useERC20Balance(walletAddress: string) {
  const [balance, setBalance] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    async function fetchBalance() {
      try {
        setLoading(true);
        const provider = new ethers.JsonRpcProvider(
          import.meta.env.VITE_PROVIDER_URL
        );
        const token = new ethers.Contract(
          import.meta.env.VITE_TOKEN_ADDRESS,
          ERC20_ABI,
          provider
        );

        const [rawBalance, decimals] = await Promise.all([
          token.balanceOf(walletAddress),
          token.decimals(),
        ]);

        const formatted = ethers.formatUnits(rawBalance, decimals);
        if (mounted) {
          setBalance(formatted);
        }
      } catch (err) {
        console.error("Error fetching balance:", err);
        if (mounted) setBalance("0");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    if (walletAddress) {
      fetchBalance();
    }

    return () => {
      mounted = false;
    };
  }, [walletAddress]);

  return { balance, loading };
}
