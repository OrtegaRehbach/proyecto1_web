import React from "react";
import styles from "../styles/NavBar.module.css";
import NavDropdownButton from "./NavDropdownButton";
import Image from "next/image";
import logo from "../../public/yelp_logo.png";

export default function() {
    return (
        <nav className={styles.container}>
            <div className={styles.upperNav}>
                <a href="">
                    <Image 
                        src={logo}
                        alt="Yelp logo"
                        height={32}
                        width={80}
                    />
                </a>
                <div className={styles.searchBarContainer}>
                    <div className={styles.searchInput}>
                        <input type="text" placeholder="tacos, cheap dinner, Max's"></input>
                    </div>
                    <div className={styles.searchLocation}>
                        <input type="text" value="San Francisco, CA"></input>
                    </div>
                    <div className={styles.searchButton}>
                        <svg width="24" height="24" class="icon_svg"><path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path></svg>
                    </div>
                </div>
                <a className={`${styles.navButton} ${styles.marginLeftAuto}`} href="">
                    <span>Yelp for Business</span>
                </a>
                <a className={styles.navButton} href="">
                    <span>Write a Review</span>
                </a>
                <a className={styles.loginButton} href="">
                    <span>Log In</span>
                </a>
                <a className={styles.signUpButton} href="">
                    <span>Sign Up</span>
                </a>
            </div>
            <div className={styles.lowerNav}>
                <NavDropdownButton title="Restaurants" href=""/>
                <NavDropdownButton title="Home Services" href=""/>
                <NavDropdownButton title="Auto Services" href=""/>
                <NavDropdownButton title="More" href=""/>    
            </div>
        </nav>
    );
}