import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}

export function isAuthenticated() {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
}

export function getUserId() {
  return JSON.parse(Cookies.get("user")).user_id;
}
