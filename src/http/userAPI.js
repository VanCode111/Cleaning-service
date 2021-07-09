import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("/api/user/registration", {
    email,
    password,
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const login = async (email, password) => {
  const { data } = await $host.post("/api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const check = async () => {
  const { data } = await $authHost.post("/api/user/auth");
  console.log(data);
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
