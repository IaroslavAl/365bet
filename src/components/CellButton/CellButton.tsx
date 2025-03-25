import React, { ButtonHTMLAttributes } from "react";
import classes from "./CellButton.module.css";

interface CellButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    children: React.ReactNode;
}

export default function CellButton({ children, isActive, ...props }: CellButtonProps) {
    const className = isActive
        ? `${classes.button} ${classes.active}`
        : classes.button;

    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
}