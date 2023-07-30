import axios from "axios";
import { host } from "./upload";

const API_url = `${host}/photo/compare/`;

export async function checkSimilarity(main_token: string, сompare_token: string) {
  const data = JSON.stringify({
    main_token,
    face_id: 0,
    сompare_token
  })

  try {
    const result = await axios.get(`${API_url}?data=${data}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
