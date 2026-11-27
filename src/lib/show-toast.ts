import { toast } from "sonner";

export function successToast(message: string) {
  toast.success(message, {
    position: "top-center",
    style: { backgroundColor: "var(--chart-2)", color: "var(--muted)" },
  });
}

export function errorToast(message: string) {
  toast.error(message, {
    position: "top-center",
    style: { backgroundColor: "var(--destructive)", color: "var(--muted)" },
  });
}
