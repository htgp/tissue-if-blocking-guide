export enum BlockingAgent {
  SERUM = "正常血清 (Normal Serum)",
  BSA = "牛血清白蛋白 (BSA/Bovine Serum Albumin)",
  COMMERCIAL = "无蛋白/通用封闭液 (Protein-free/Commercial)",
}

export type Species = "Mouse" | "Rabbit" | "Rat" | "Goat" | "Donkey" | "Human" | "Other";

export interface SelectionState {
  tissueType: string;
  primaryHost: Species;
  primaryTarget: Species;
  secondaryHost: Species;
}

export interface Recommendation {
  title: string;
  rank: "Primary" | "Alternative" | "Special";
  composition: string;
  reason: string;
  tips: string[];
}
