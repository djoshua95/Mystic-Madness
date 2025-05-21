"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/css/logout.module.css";

export default function LogoutPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCountdown((cd) => cd - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) router.push("/");
  }, [countdown, router]);

  return (
    <div className={styles.container}>
      <Image src="favicon.svg" alt="Logo" width={100} />
      <h1 className={styles.title}>Logged out, redirecing in {countdown}...</h1>
    </div>
  );
}
