import axios from "axios";
import { host } from "./upload";
import { RegistrationParams } from "../../features/RegistrationForm/regForm";

const API_url = `${host}/auth/register/`;

export async function registerUser(params: RegistrationParams) {
  const { email, username, password } = params;

  try {
    const result = await axios.post(API_url, {email, username, password});
    return result;
  } catch (error) {
    console.log(error);
  }
}
