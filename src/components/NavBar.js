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
                <div>Search Bar</div>
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