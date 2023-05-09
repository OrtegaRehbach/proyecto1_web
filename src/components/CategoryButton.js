import React from "react";
import styles from "../styles/CategoryButton.module.css";

export default function() {
    return (
        <a className={styles.container}>
            <div className={styles.categoryImg}></div>
            <p>Category</p>
        </a>
    );
}