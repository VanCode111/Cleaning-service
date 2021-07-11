import { $host, $authHost } from "./index";

export const addService = async (name, price, img) => {
  const { data } = await $host.post("/api/services/create", {
    name,
    price,
    img,
  });
  return data;
};

export const getServices = async () => {
  const { data } = await $host.get("/api/service/getall");
  return data;
};
