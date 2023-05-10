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

            <div className={styles.slideContainer}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.slideIndicatorContainer}>

                        </div>
                        <div className={styles.slideButton}>
                            <svg width="24" height="24" class="icon_svg"><path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path></svg>
                            <span>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}