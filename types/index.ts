import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  
  textStyles?: string;
  containerStyles?: string;
  
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}