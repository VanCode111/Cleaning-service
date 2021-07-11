import { $host, $authHost } from "./index";

export const addToBasket = async (userId, services, rooms, resultPrice) => {
  const { data } = await $host.post("/api/basket/addtocart", {
    userId,
    services,
    rooms,
    resultPrice,
  });
  return data;
};
export const deleteFromBasket = async (userId, orderId) => {
  console.log(userId + " " + orderId);
  const { data } = await $host.post("/api/basket/deletefrombasket", {
    userId,
    orderId,
  });
  return data;
};
export const getBasket = async (userId) => {
  console.log(userId);
  const { data } = await $host.post("/api/basket/getbasket", {
    userId: userId,
  });
  return data;
};
