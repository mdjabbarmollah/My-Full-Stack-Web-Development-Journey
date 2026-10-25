export interface CardobjectTypelekhaholo {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  badge?: string; // optional -> jei card e badge nai, oita render e dekhabe na
}
