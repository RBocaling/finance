import { ethers } from "ethers";

export async function getERC20Balance(
  providerUrl: string,
  tokenAddress: string,
  walletAddress: string
) {
  // Connect to network
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // Minimal ERC20 ABI: balanceOf and decimals
  const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)"
  ];

  // Create contract instance
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

  // Fetch balance and decimals
  const [rawBalance, decimals] = await Promise.all([
    tokenContract.balanceOf(walletAddress),
    tokenContract.decimals()
  ]);

  // Format balance into human-readable form
  const balance = ethers.formatUnits(rawBalance, decimals);

  return balance;
}

// Example usage