import styles from "@/css/home/newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Join Our Newsletter</h2>
        <p className={styles.description}>
          Subscribe to get special offers, free giveaways, and
          once-in-a-lifetime deals.
        </p>
        <div className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
            className={styles.input}
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
