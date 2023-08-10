export interface iButton extends iButtonStyles {
  name: string | JSX.Element;
  onClick?: () => void;
}

export interface iButtonStyles {
  variant: string;
}
