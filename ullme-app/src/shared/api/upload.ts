import axios from "axios";
import { getBase64 } from "../helpers/getBase64";
import { json } from "react-router-dom";

export const API_URL = "https://neuro2.getphoto.su/";

export async function uploadPhoto(photo: File) {
  
  const b64_im = await getBase64(photo);

  const data = JSON.stringify({
    key: "OhWaejaesh8oo8ae",
    token: "None",
    project: "Ullme",
    unit: "site",
    image_type: "b64",
    image_data: b64_im,
    rotatey: 0,
  })
  try {
    const result = await axios.post(
      API_URL, {'data': data} // {data} - тоже не работает
      ,
      {
        headers: {
          withCredentials: true,
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}
