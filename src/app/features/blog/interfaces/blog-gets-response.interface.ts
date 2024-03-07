import { Category } from "src/app/features/category/interfaces/category.interface";

export interface BlogGetsResponse {
  id: string;
  name: string;
  summary: string;
  thumbnail: string;
  categoryIds: string[];
  createdAt: number;
  updatedBy: number;

  //frontend
  categories?: Category[];
}
