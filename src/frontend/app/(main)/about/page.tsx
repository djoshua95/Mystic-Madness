import Image from "next/image";
import Link from "next/link";
import { teamMembers, commitments } from "./config";
import { ArrowRight, Heart, Users, Award } from "lucide-react";
import styles from "@/css/about/about.module.css";

function TeamMember(props: { name: string; role: string; bio: string }) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberImage}>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt={props.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <h3 className={styles.memberName}>{props.name}</h3>
      <p className={styles.memberRole}>{props.role}</p>
      <p className={styles.memberBio}>{props.bio}</p>
    </div>
  );
}

function Commitment(props: {
  icon: (props: { size: number }) => React.JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.commitmentCard}>
      <div className={styles.commitmentIcon}>
        <props.icon size={24} />
      </div>
      <h3 className={styles.commitmentTitle}>{props.title}</h3>
      <p className={styles.commitmentDescription}>{props.description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="About StyleShop"
            width={1920}
            height={600}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className="container">
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>About Mystic Madness</h1>
                <p className={styles.heroDescription}>
                  Brings you the latest fashion trends with a passion for style,
                  quality, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              To democratize fashion by making high-quality, sustainable
              clothing accessible to everyone, while building a community that
              celebrates individual style and conscious consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`container ${styles.values}`}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Heart size={32} />
            </div>
            <h3 className={styles.valueTitle}>Passion for clothing</h3>
            <p className={styles.valueDescription}>
              Constantly seeking the latest trends and timeless pieces that make
              you feel confident.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Users size={32} />
            </div>
            <h3 className={styles.valueTitle}>Community</h3>
            <p className={styles.valueDescription}>
              We believe fashion is about connection. Our community celebrates
              diversity, creativity, and individual expression.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Award size={32} />
            </div>
            <h3 className={styles.valueTitle}>Quality</h3>
            <p className={styles.valueDescription}>
              Every item is carefully selected for its craftsmanship,
              durability, and style. We never compromise on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`container ${styles.team}`}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((tm) => (
            <TeamMember
              key={tm.name}
              name={tm.name}
              role={tm.role}
              bio={tm.bio}
            />
          ))}
        </div>
      </section>

      {/* Commitments Section */}
      <section className={`container ${styles.commitments}`}>
        <h2 className={styles.sectionTitle}>Our Commitments</h2>
        <div className={styles.commitmentsGrid}>
          {commitments.map((c) => (
            <Commitment
              icon={({ size }) => <c.icon size={size} />}
              key={c.title}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Join Our Fashion Journey</h2>
            <p className={styles.ctaDescription}>
              Discover your style with our curated collection of sustainable
              fashion pieces.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/" className={styles.ctaButton}>
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
