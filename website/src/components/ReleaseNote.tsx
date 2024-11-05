import React from "react";
import styles from "../css/ReleaseNote.module.css";

interface ReleaseNoteProps {
  date: string;
  title: string;
  link: string;
}

export function ReleaseNote({
  date,
  title,
  link,
  children,
}: React.PropsWithChildren<ReleaseNoteProps>) {
  return (
    <div className={styles.releaseNoteContainer}>
      <div className={styles.releaseDate}>{date}</div>
      <div className={styles.releaseContent}>
        <a href={link}>
          <h1>{title}</h1>
        </a>
        {children}
      </div>
    </div>
  );
}
