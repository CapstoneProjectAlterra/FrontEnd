import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}

export function getUserId() {
  return JSON.parse(Cookies.get("user")).user_id;
}

export function getUserRole() {
  return JSON.parse(Cookies.get("user")).roles;
}

export function isAuthenticatedUser() {
  const token = getToken();
  if (token) {
    const roles = JSON.parse(Cookies.get("user")).roles;
    if (roles == "USER") {
      return true;
    }
  }
  return false;
}

export function isAuthenticatedAdmin() {
  const token = getToken();
  if (token) {
    const roles = JSON.parse(Cookies.get("user")).roles;
    if (roles == "ADMIN") {
      return true;
    }
  }
  return false;
}
