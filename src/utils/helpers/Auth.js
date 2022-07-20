import Cookies from "js-cookie";
import axiosInstance from "../../networks/apis";

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

export async function isProfileNull() {
  const userId = getUserId();
  const user = await axiosInstance
    .get(`/user/${userId}`, { data: "" })
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err);
    });

  const family = await axiosInstance
    .get(`/family`, { data: "" })
    .then((res) =>
      res.data.data.filter((family) => family.profile.user_id === userId)
    )
    .catch((err) => {
      console.log(err);
    });

  const profile = family.filter((family) => family.nik === user.username)[0];

  const isNullish = Object.values(profile).some((value) => {
    if (value === null || value === undefined || value === "") {
      return true;
    } else {
      return false;
    }
  });
  return isNullish;
}
