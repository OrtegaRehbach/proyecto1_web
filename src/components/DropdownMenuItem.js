import React from "react";
import styles from "../styles/DropdownMenuItem.module.css";

export default function({text, src}) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <span>{text}</span>
        </div>
    );
}