import { api } from "./index";

export async function reqAllMaterials() {
  return await api.get("/materials");
}
