import React from "react";
import styles from "../styles/CategoryButton.module.css";
import Image from "next/image";

export default function({imgSrc, categoryText}) {
    return (
        <a className={styles.container}>
            <div className={styles.categoryImg}>
                <Image
                    src={imgSrc}
                    alt="Category icon"
                    fill
                    style={{objectFit: "cover", objectPosition: "50% 50%"}}
                ></Image>
            </div>
            <p>{categoryText}</p>
        </a>
    );
}