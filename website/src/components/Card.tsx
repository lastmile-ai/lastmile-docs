import React from "react";
import classNames from "classnames";
import styles from "../css/Card.module.css";

interface CardProps {
  href: string;
  title: string;
  description: string;
  backgroundColor: string;
  className?: string; // Allow passing of custom class names
}

export function Card({
  href,
  title,
  description,
  backgroundColor,
  className,
}: CardProps) {
  return (
    <a
      href={href}
      className={classNames(styles.card, className)}
      style={{ backgroundColor }}
    >
      <h3 className={styles.cardTitle}>
        {title}
        <span className={styles.icon}>&gt;</span>
      </h3>
      <p>{description}</p>
    </a>
  );
}