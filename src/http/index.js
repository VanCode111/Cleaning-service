import axios from "axios";

const $host = axios.create({
  baseURL: "http://cleaning-api.std-1415.ist.mospolytech.ru/",
});

const $authHost = axios.create({
  baseURL: "http://cleaning-api.std-1415.ist.mospolytech.ru/",
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
