import { toast } from "sonner";

export default function ErrorNotification(message, description) {
  toast.error(message, {
    description: description,
  });
}
