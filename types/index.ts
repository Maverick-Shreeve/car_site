import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  
  textStyles?: string;
  containerStyles?: string;
  
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}