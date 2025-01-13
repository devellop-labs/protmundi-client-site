import { ContactFormType } from "@/validators/contact";
import api from "./api";
import { sendMail } from "./email";

export async function makeContactRequest(data: ContactFormType) {
  return sendMail(data);
}
