import React from "react";
import styles from "../styles/NavDropdownButton.module.css"

export default function({title, href, items}) {

    return (
        <div className={styles.container}>
            <a className={styles.link} href={href}>
                <span>{title}</span>
                <svg width="24" height="24" className={styles.downArrow}>
                    <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                </svg>
            </a>
            <dialog className={styles.dropdownContainer} open>This is a dialog</dialog>
        </div>
    );
}