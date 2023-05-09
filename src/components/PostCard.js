import React from "react";
import styles from "../styles/PostCard.module.css";
import Image from "next/image";

export default function({postType, posterName, posterImageSrc, placeName, placeImgSrc, title, rating, reviewText, images}) {
    
    // const imageAmount = images.length;
    
    // const simplePostContent = (
    //     <div>
    //         {() => {if (imageAmount > 1) {return ()}}}
    //     </div>
    // );

    const reviewPostContent = 0;

    const getPostContent = () => {
        if (postType === "picture") {
            return (
                <Image
                    src={posterImageSrc}
                    alt="Posted picture"
                    fill
                    style={{objectFit: "cover"}}
                />
            );
        } else {
            return(<div></div>);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.postHeader}>
                <div className={styles.posterImage}>
                    <Image
                        src={posterImageSrc}
                        alt="User profile picture"
                        fill
                        style={{objectFit: "cover", borderRadius: "inherit"}}
                    />
                </div>
                <div className={styles.postHeaderText}>
                    <div className={styles.posterName}>poster Name</div>
                    <div>post Description</div>
                </div>
            </div>
            <div className={styles.postContent}>
                {getPostContent()}
            </div>
            <div className={styles.postFooter}>
                <div className={styles.likeButton}>
                    <svg width="24" height="24" className="icon_svg">
                        <path d="M22.35 9.13A3 3 0 0020 8h-3V4.28A3.28 3.28 0 0013.72 1a2 2 0 00-1.9 1.37L9.28 10H2a1 1 0 00-1 1v11a1 1 0 001 1h13.25c.21 0 5.11-.08 6.7-7.12l1-4.21a3 3 0 00-.6-2.54zM3 12h6v9H3v-9zm18-.77l-1 4.2C18.78 20.85 15.38 21 15.25 21H11v-9.84L13.72 3c.707 0 1.28.573 1.28 1.28V9a1 1 0 001 1h4a1 1 0 01.78.38 1 1 0 01.22.85z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}