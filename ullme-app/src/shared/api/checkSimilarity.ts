import axios from "axios";
import { host } from "./upload";

const API_url = `${host}/photo/compare/`;

export async function checkSimilarity(
  main_token: string,
  сompare_token: string
) {
  try {
    const result = await axios.get(
      `${API_url}?main_token=${main_token}&face_id=0&compare_token=${сompare_token}`,
      {
        headers: { withCredentials: true },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}
