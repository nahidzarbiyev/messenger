import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getSesssion() {
  return await getServerSession(authOptions);
}
