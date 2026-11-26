"use client";

import ControlledInput from "@/components/controlled-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SendMessage,
  sendMessageSchema,
} from "@/schemas/send-message/send-message-schemas";
import { useSendMessage } from "@/hooks/send-message/use-send-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/components/ui/spinner";

const emptyField: SendMessage = {
  email: "",
  firstName: "",
  lastName: "",
  message: "",
  phone: "",
};

export default function ContactForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: emptyField,
    resolver: zodResolver(sendMessageSchema),
  });

  const { mutate: sendMessage, isPending } = useSendMessage();

  const onSubmit: SubmitHandler<SendMessage> = (data) => {
    sendMessage(data);
  };

  return (
    <div className="flex-1 flex flex-col gap-[24px] border-[0.2px] rounded-r-[24px] p-[20px]">
      <p className="font-[500] text-[20px] leading-[24px] text-secondary">
        {"Envoyez-nous votre message"}
      </p>

      <form
        className="flex flex-col gap-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          <ControlledInput
            control={control}
            name="lastName"
            placeholder="Nom*"
          />
          <ControlledInput
            control={control}
            name="firstName"
            placeholder="Prénom*"
          />
        </div>

        <ControlledInput
          control={control}
          name="phone"
          placeholder="+261 00 00 000 00"
        >
          <Phone color="var(--secondary)" />
        </ControlledInput>

        <ControlledInput
          control={control}
          name="email"
          placeholder="email@exemple.com"
        >
          <Mail color="var(--secondary)" />
        </ControlledInput>

        <ControlledInput
          control={control}
          name="message"
          placeholder="Entrez votre message*"
          type="text-area"
        />

        <div className="flex justify-end">
          <Button
            disabled={isPending}
            type="submit"
            className={
              "h-[56px] bg-secondary text-white px-[16px] py-[12px] rounded-[var(--radius)] w-[20%] hover:bg-secondary cursor-pointer"
            }
          >
            {isPending ? <Spinner /> : "Envoyer le message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
