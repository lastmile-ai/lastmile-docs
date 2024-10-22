import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "../css/SplitPane.module.css";

interface SplitPaneProps {
  leftChild: ReactNode;
  rightChild: ReactNode;
  className?: string;
  leftPaneClassName?: string;
  rightPaneClassName?: string;
}

export function SplitPane({
  leftChild,
  rightChild,
  className,
  leftPaneClassName,
  rightPaneClassName,
}: SplitPaneProps) {
  return (
    <div className={classNames(styles.splitPane, className)}>
      <div className={classNames(styles.leftPane, leftPaneClassName)}>
        {leftChild}
      </div>
      <div className={classNames(styles.rightPane, rightPaneClassName)}>
        {rightChild}
      </div>
    </div>
  );
}
