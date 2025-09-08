import api from "../services/api.service"
import crypto from "crypto-js";

export const loginAPI = async (data: { identifier: string; password: string }) => {
  try {
    const sha256Keys =
      import.meta.env.VITE_ADMIN_SECRET_KEY_ACCESS ||
      "dnU63RdmM6w66cVbxzXgNBzKZ7tsfWY2duZBnVhNmHzE93ZHAKYCQrQtM9tH";
    const generateSha256 = getSHA256(JSON.stringify(data), sha256Keys);
    const response = await api.post(
      `/admin-login?is_admin=${generateSha256}`,
      data
    );
    if (response.status !== 200) {
      return;
    }
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export function getSHA256(reqStr:any, signKey:any) {
  try {
    const jsonObject = JSON.parse(reqStr);
    if (!jsonObject) {
      return "";
    }
    const keys = Object.keys(jsonObject).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
    let content = "";
    keys.forEach((key) => {
      if (key === "sign") {
        return;
      }
      const value = jsonObject[key];
      if (value === null || value === undefined || value === "") {
        return;
      }
      content += `${content.length > 0 ? "&" : ""}${key}=${value}`;
    });

    if (content.length > 0) {
      content += `&${signKey}`;
    } else {
      content = signKey;
    }

    return crypto.SHA256(content).toString(crypto.enc.Hex);
  } catch (error) {
    console.error("Error generating SHA-256 hash:", error);
    return "";
  }
}