import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "../css/Grid.module.css";

interface GridProps {
  children: ReactNode;
  className?: string; // Allow passing of custom class names
}

export function Grid({ children, className }: GridProps) {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
}
