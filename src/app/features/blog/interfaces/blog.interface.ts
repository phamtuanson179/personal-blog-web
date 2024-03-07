import { Category } from "src/app/features/category/interfaces/category.interface";

export interface Blog {
  id: string;
  name: string;
  summary: string;
  thumbnail: string;
  content: string;
  categoryIds: string[];
  tags: string[];
  createdAt: number;
  updatedBy: number;

  categories?: Category[];
}
