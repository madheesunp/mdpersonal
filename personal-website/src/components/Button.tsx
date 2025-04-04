import { ReactNode } from "react";
import "./styles/Button.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={() => {}}>
      {children}
    </button>
  );
};

export default Button;
