"use client";
import React from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/">
            <img src="/logo.svg" alt="" className={styles.logo} />
          </Link>
          <ul>
            <li className={router.pathname === "/client/about" ? styles.active : ""}>
              <Link href="/client/about">О нас</Link>
            </li>
            <li className={router.pathname === "/client/projects" ? styles.active : ""}>
              <Link href="/client/projects">Проекты</Link>
            </li>
            <li className={router.pathname === "/client/team" ? styles.active : ""}>
              <Link href="/client/team">Команда</Link>
            </li>
            <li className={router.pathname === "/client/profile" ? styles.active : ""}>
              <Link href="/client/profile">Профиль</Link>
            </li>
          </ul>
          <div className={styles.authBtns}>
            <Link href="/auth/login">
              <button className={styles.login}>Log In</button>
            </Link>
            <Link href='/auth/signup'>
              <button className={styles.signup}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
