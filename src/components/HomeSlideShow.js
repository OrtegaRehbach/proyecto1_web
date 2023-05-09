"use client"

import React, { createRef, useState } from "react";
import styles from "../styles/HomeSlideShow.module.css"
import Image from "next/image";

const images = [
    {
        src: "https://s3-media0.fl.yelpcdn.com/educatorphoto/SzdbzhpbM0KKyr2dYu24rA/o.jpg",
        title: "Make a splash",
        buttonPrompt: "Pool service",
        businessName: "Danipool",
        photoAuthor: "AUTHOR"
    },
    {
        src: "https://s3-media0.fl.yelpcdn.com/educatorphoto/k0oFer3y9EnL-Id0DONTQg/o.jpg",
        title: "Keep your car feeling fresh",
        buttonPrompt: "Auto detailing",
        businessName: "Clean Green Mobile",
        photoAuthor: "Oscar K."
    },
    {
        src: "https://s3-media0.fl.yelpcdn.com/educatorphoto/fP07TGmh-eQwrs3j-aa1Qg/o.jpg",
        title: "Nothing like a new coat of paint",
        buttonPrompt: "Painters",
        businessName: "Carlos' Painting & Handyman",
        photoAuthor: "Ginger C."
    }
]

export default function() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const backImage = createRef();
    const frontImage = createRef();

    const slideStyle = {
        backgroundImage: `url(${images[currentIndex].src})`
    };

    const goToSlide = slideIndex => {

        setCurrentIndex(slideIndex);
    };

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.container}>
            {/* <Image
                priority
                src="https://s3-media0.fl.yelpcdn.com/educatorphoto/k0oFer3y9EnL-Id0DONTQg/o.jpg"
                fill
                style={{objectFit: "cover", objectPosition: "50% 0%"}}
            /> */}
            <div ref={backImage} className={styles.backImage} style={slideStyle}></div>
            <div ref={frontImage} className={styles.frontImage} style={slideStyle}></div>
            {/* <button onClick={goToNextSlide}>Click for slide</button> */}
        </div>
    );
}