import Link from "next/link";
import { type LogoProps } from "./definitions";
import styles from "@/css/home/header.module.css";

export default function MysticMadnessLogo(
  props: { className?: string } & LogoProps,
) {
  const { className, width, height } = props;
  return (
    <Link href="/" className={`${styles.logo} ${className || ""}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logoSvg}
      >
        <path
          d="M16 3C9.92487 3 5 7.92487 5 14C5 17.2522 6.67024 19.3263 8.33691 20.5631C10.0036 21.7999 11.6667 22.3333 11.6667 22.3333L10.5 26.5L13.1667 27.6667L16 24.8333L18.8333 27.6667L21.5 26.5L20.3333 22.3333C20.3333 22.3333 21.9964 21.7999 23.6631 20.5631C25.3298 19.3263 27 17.2522 27 14C27 7.92487 22.0751 3 16 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 15C10.6716 15 10 14.3284 10 13.5C10 12.6716 10.6716 12 11.5 12C12.3284 12 13 12.6716 13 13.5C13 14.3284 12.3284 15 11.5 15Z"
          fill="currentColor"
        />
        <path
          d="M20.5 15C19.6716 15 19 14.3284 19 13.5C19 12.6716 19.6716 12 20.5 12C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15Z"
          fill="currentColor"
        />
        <path
          d="M16 19C14.8954 19 14 18.5523 14 18C14 17.4477 14.8954 17 16 17C17.1046 17 18 17.4477 18 18C18 18.5523 17.1046 19 16 19Z"
          fill="currentColor"
        />
        <path
          d="M13 16.5C13 16.5 14 18 16 18C18 18 19 16.5 19 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 11C8.5 11 10 9 11.5 9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M23.5 11C23.5 11 22 9 20.5 9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.logoText}>Mystic Madness</span>
    </Link>
  );
}
