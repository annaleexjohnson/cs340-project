"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  };

  const NavLinks = () => {
    return (
      <React.Fragment>
        <div className={styles.linkContainer}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/wizards" className={styles.navLink}>
            Wizards
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/houses" className={styles.navLink}>
            Houses
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/spells" className={styles.navLink}>
            Spells
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/spell-types" className={styles.navLink}>
            Spell Types
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/spell-instances" className={styles.navLink}>
            Spell Instances
          </Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className={styles.hamburgerMenu} onClick={toggleHamburger}>
        {!openMenu ? <CiMenuBurger /> : <CiMenuFries />}
      </div>

      {/* Mobile Hamburger Menu */}
      {openMenu ? (
        <nav className={styles.navContainer}>
          <NavLinks />
        </nav>
      ) : (
        <div></div>
      )}

      {/* Desktop Nav Bar */}
      <nav className={`${styles.navContainer} ${styles.desktop}`}>
        <NavLinks />
      </nav>
    </>
  );
};

export default Navbar;
