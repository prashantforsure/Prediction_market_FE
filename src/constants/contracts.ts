import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

export const contractAddress = "0x39227c4DEfcbB82709576902f51362b1F148715E";
export const tokenAddress = "0x0b172fcac3Db69D480AbA20153DDa1999D89AA22";

export const contract = getContract({
    client: client,
    chain: sepolia,
    address: contractAddress
});

export const predictionMarketContract = getContract({
    client: client,
    chain: sepolia,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: sepolia,
    address: tokenAddress
});