import axios, { AxiosPromise } from "axios";
import { getBase64 } from "../helpers/getBase64";
import { json } from "react-router-dom";
export const host = 'http://127.0.0.1'

export const API_URL = `${host}/photo/upload/`;

export interface Response {
  token: string

}

export async function uploadPhoto(photo: File) {
  const b64_im = await getBase64(photo);
  const data = JSON.stringify({
    base64_image: b64_im,
  });
  try {
    const result = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        withCredentials: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
