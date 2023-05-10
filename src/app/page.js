import CategoryButton from "@/components/CategoryButton";
import styles from "../styles/page.module.css";
import HomeSlideShow from "@/components/HomeSlideShow";
import NavBar from "@/components/NavBar";
import PostCard from "@/components/PostCard";

const placeHolderImg = "/placeholder.png"

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
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
          <PostCard posterImageSrc={placeHolderImg} postType={"picture"}/>
        </div>
        <div className={styles.showMoreContainer}>
          <div className={styles.showMoreButton}>
            <svg width="24" height="24" class="icon_svg"><path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path></svg>
            <span>Show more activity</span>
          </div>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryGrid}>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Restaurants"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Shopping"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Nightlife"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Active Life"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Beauty & Spas"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Automotive"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="Home Services"></CategoryButton>
            <CategoryButton imgSrc={placeHolderImg} categoryText="More"></CategoryButton>
          </div>
        </div>
      </div>
      <footer className={styles.homeFooter}>
        <div className={styles.linkContainer}>
          <div className={styles.linkCategory}>
            <div className={styles.linkCategoryTitle}>About</div>
            <ul className={styles.footerLinkList}>
              <li className={styles.footerLink}>About Yelp</li>
              <li className={styles.footerLink}>Careers</li>
              <li className={styles.footerLink}>Press</li>
              <li className={styles.footerLink}>Investor Relations</li>
              <li className={styles.footerLink}>Trust & Safety</li>
              <li className={styles.footerLink}>Content Guidelines</li>
              <li className={styles.footerLink}>Accessibility Statement</li>
              <li className={styles.footerLink}>Terms of Service</li>
              <li className={styles.footerLink}>Privacy Policy</li>
              <li className={styles.footerLink}>Ad Choices</li>
              <li className={styles.footerLink}>Your Privacy Choices</li>
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkCategoryTitle}>Discover</div>
            <ul className={styles.footerLinkList}>
              <li className={styles.footerLink}>Yelp Project Cost Guides</li>
              <li className={styles.footerLink}>Collections</li>
              <li className={styles.footerLink}>Talk</li>
              <li className={styles.footerLink}>Events</li>
              <li className={styles.footerLink}>Yelp Blog</li>
              <li className={styles.footerLink}>Support</li>
              <li className={styles.footerLink}>Yelp Mobile</li>
              <li className={styles.footerLink}>Developers</li>
              <li className={styles.footerLink}>RSS</li>
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkCategoryTitle}>Yelp for Business</div>
            <ul className={styles.footerLinkList}>
              <li className={styles.footerLink}>Yelp for Business</li>
              <li className={styles.footerLink}>Business Owner Login</li>
              <li className={styles.footerLink}>Claim Your Business Page</li>
              <li className={styles.footerLink}>Advertise on Yelp</li>
              <li className={styles.footerLink}>Yelp for Restaurant Owners</li>
              <li className={styles.footerLink}>Table Management</li>
              <li className={styles.footerLink}>Business Success Stories</li>
              <li className={styles.footerLink}>Business Support</li>
              <li className={styles.footerLink}>Yelp Blog for Business</li>
              
            </ul>
          </div>
          <div className={styles.linkCategory}>
            <div className={styles.linkCategoryTitle}>Languages</div>
              <div className={styles.footerLink}>English</div>
            <div className={styles.linkCategoryTitle}>Countries</div>
              <div className={styles.footerLink}>United States</div>
          </div> 
        </div>
      </footer>
    </div>
  )
}
