import { toast } from "sonner";

export default function SuccessNotification(message, description) {
  toast.success(message, {
    description: description,
  });
}
