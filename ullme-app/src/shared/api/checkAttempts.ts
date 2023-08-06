import axios from "axios";
import { host } from "./upload";

const API_url = `${host}/photo/check-attempts/`;

export async function checkAttempts() {
  try {
    const result = await axios.get(API_url);
    return result;
  } catch (error) {
    console.log(error);
  }
}