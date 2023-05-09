import CategoryButton from "@/components/CategoryButton";
import styles from "../styles/page.module.css";
import HomeSlideShow from "@/components/HomeSlideShow";
import NavBar from "@/components/NavBar";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.homeSlideShowContainer}>
        <div className={styles.navBar}>
          <NavBar></NavBar>
        </div>
        <div className={styles.slideShow}>
          <HomeSlideShow></HomeSlideShow>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.title}>Recent Activity</h2>
        <div className={styles.postContainer}>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.categoryContainer}>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
          <CategoryButton></CategoryButton>
        </div>
      </div>
    </div>
  )
}
