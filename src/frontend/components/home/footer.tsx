import Link from "next/link";
import TwitterLogo from "@/components/logos/twitter-logo";
import FacebookLogo from "@/components/logos/facebook-logo";
import InstagramLogo from "@/components/logos/instagram-logo";
import styles from "@/css/home/footer.module.css";

const FOOTER_LINKS = {
  shop: {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "#" },
      { label: "Women", href: "#" },
      { label: "Men", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Sale", href: "#" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Customer Service", href: "#" },
      { label: "My Account", href: "#" },
      { label: "Find a Store", href: "#" },
      { label: "Legal & Privacy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Press", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
};

function FooterLinkSection({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label} className={styles.link}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.logo}>Mystic Madness</h3>
            <p className={styles.description}>
              Your destination for trendy fashion and accessories at affordable
              prices.
            </p>
            <div className={styles.socialLinks}>
              <button className={styles.socialButton}>
                <FacebookLogo width="16" height="16" />
              </button>
              <button className={styles.socialButton}>
                <InstagramLogo width="16" height="16" />
              </button>
              <button className={styles.socialButton}>
                <TwitterLogo width="16" height="16" />
              </button>
            </div>
          </div>
          {Object.values(FOOTER_LINKS).map((section) => (
            <FooterLinkSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className={styles.separator} />
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 Mystic Madness. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>
              Terms
            </Link>
            <Link href="#" className={styles.legalLink}>
              Privacy
            </Link>
            <Link href="#" className={styles.legalLink}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
