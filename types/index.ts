import { z } from "zod";
import {
  insertProductSchema,
  insertCardSchema,
  cartItemSchema,
} from "@/lib/validator";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCardSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
