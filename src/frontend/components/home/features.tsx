import styles from "@/css/home/features.module.css";

// Features data
const features = [
  {
    title: "Free Shipping",
    description: "On all orders over $50",
    paths: ["M5 12h14", "M12 5v14"],
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"],
  },
  {
    title: "Easy Returns",
    description: "30 days return policy",
    paths: ["M21 10H3", "M21 6H3", "M21 14H3", "M21 18H3"],
  },
];

export default function Features() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.feature}>
            <div className={styles.iconContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {feature.paths.map((p, index) => (
                  <path key={feature.title + index} d={p} />
                ))}
              </svg>
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
