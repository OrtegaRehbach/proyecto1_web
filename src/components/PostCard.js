import React from "react";
import styles from "../styles/PostCard.module.css";

export default function({postType, posterName, posterImageSrc, placeName, placeImgSrc, title, rating, reviewText, images}) {
    
    // const imageAmount = images.length;
    
    // const simplePostContent = (
    //     <div>
    //         {() => {if (imageAmount > 1) {return ()}}}
    //     </div>
    // );

    const reviewPostContent = 0;

    return (
        <div className={styles.container}>
            <div className={styles.postHeader}>
                <div className={styles.posterImage}></div>
                <div className={styles.postHeaderText}>
                    <div className={styles.posterName}>posterName</div>
                    <div>postDescription</div>
                </div>
                <div className={styles.photosContainer}>
                    {}
                </div>
            </div>
        </div>
    );
}