import { toast } from "sonner";

export function successToast(message: string) {
  toast.success(message, {
    position: "top-center",
    style: { backgroundColor: "var(--primary)", color: "var(--background)" },
  });
}

export function errorToast(message: string) {
  toast.error(message, {
    position: "top-center",
    style: { backgroundColor: "var(--destructive)", color: "var(--background)" },
  });
}
