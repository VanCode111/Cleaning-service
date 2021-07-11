import { $host, $authHost } from "./index";

export const getRooms = async () => {
  console.log("работает");
  const { data } = await $host.get("/api/room/getall");

  return data;
};
