import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: string;
    register?: UseFormRegisterReturn<string>;
    error?: FieldError;
  }