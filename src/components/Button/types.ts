import { ButtonHTMLAttributes } from 'react';

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  onClick?: () => void;
  variant?: string;
  clicked?: boolean;
}
