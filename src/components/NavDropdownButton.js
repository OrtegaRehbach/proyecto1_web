'use client'
import React, { useEffect } from "react";
import styles from "../styles/NavDropdownButton.module.css"

export default function({title, href, items}) {

    const [open, setOpen] = React.useState(false);

    const showMenu = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <div className={styles.container} onMouseEnter={showMenu} onMouseLeave={closeMenu}>
            <a className={styles.link} href={href}>
                <span>{title}</span>
                <svg width="24" height="24" className={styles.downArrow}>
                    <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                </svg>
            </a>
            <dialog className={styles.dropdown} open={open}>
                <div className={styles.dropdownContainer}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                    <div>Item 6</div>
                </div>
            </dialog>
        </div>
    );
}