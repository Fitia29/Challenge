import { SendMessage } from "@/schemas/send-message/send-message-schemas";
import { genericCreate } from "../common";

const URL = "/sendMail/send";

function toFormData(body: SendMessage) {
  const sendMessageFormData = new FormData();
  sendMessageFormData.append("lastName", body.lastName);
  sendMessageFormData.append("firstName", body.firstName);
  sendMessageFormData.append("email", body.email);
  sendMessageFormData.append("phone", body.phone ?? "");
  sendMessageFormData.append("message", body.message);

  return sendMessageFormData;
}

export const sendMessageServices = {
  send: (body: SendMessage) =>
    genericCreate<FormData, string>(URL, toFormData(body)),
};
