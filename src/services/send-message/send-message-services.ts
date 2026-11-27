import { SendMessage } from "@/schemas/send-message/send-message-schemas";
import { genericCreate } from "../common";

const URL = "";

export const sendMessageServices = {
  send: (body: SendMessage) => genericCreate<SendMessage>(URL, body),
};
