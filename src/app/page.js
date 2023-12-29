import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        First NextJS Application Deployment on Vercel
      </div>
    </main>
  );
}
