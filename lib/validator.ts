import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must be a valid number with 2 decimal places"
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 character").max(255),
  slug: z.string().min(3, "Slug must be at least 3 character").max(255),
  category: z.string().min(3, "Category must be at least 3 character").max(255),
  brand: z.string().min(3, "Brand must be at least 3 character").max(255),
  description: z
    .string()
    .min(3, "Description must be at least 3 character")
    .max(255),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "product must have at least 1 image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
