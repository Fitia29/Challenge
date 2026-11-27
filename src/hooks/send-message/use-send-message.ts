import { errorToast, successToast } from "@/lib/show-toast";
import { SendMessage } from "@/schemas/send-message/send-message-schemas";
import { sendMessageServices } from "@/services/send-message/send-message-services";
import { useMutation } from "@tanstack/react-query";

export function useSendMessage() {
  return useMutation({
    mutationFn: (body: SendMessage) => sendMessageServices.send(body),
    onSuccess: () => successToast("Message envoyé avec succes"),
    onError: () => errorToast("Impossible d'envoyer le message"),
  });
}
