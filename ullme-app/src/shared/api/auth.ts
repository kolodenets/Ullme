import axios from "axios";
import { host } from "./upload";
import { RegistrationParams } from "../../features/RegistrationForm/regForm";
import { LoginParams } from "../../features/LoginForm/loginForm";

const API_url_reg = `${host}/auth/register/`;
const API_url_login = `${host}/auth/login/`;
const API_url_logout = `${host}/auth/login/`;

export async function registerUser(params: RegistrationParams) {
  const { email, username, password } = params;

  try {
    const result = await axios.post(API_url_reg, {email, username, password});
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function loginUser(params: LoginParams) {
  const { email, password } = params;

  try {
    const result = await axios.post(API_url_login, {email, password});
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function logoutUser() {
  try {
    const result = await axios.post(API_url_logout);
    return result;
  } catch (error) {
    console.log(error);
  }
}
