import styles from "../styles/page.module.css";
import HomeSlideShow from "@/components/HomeSlideShow";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <NavBar></NavBar>
      </div>
      <div className={styles.slideShow}>
        <HomeSlideShow></HomeSlideShow>
      </div>
    </div>
  )
}
