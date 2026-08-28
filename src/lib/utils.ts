import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DJ76xuBQOzH4hf4CSbPNFe?s=sw&p=i&mlu=4";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message: string) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const recipient = rawNumber ?? "";
  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
}
