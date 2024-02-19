import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.overview}>
        <h1>CS 340 and the Database of Divination</h1>

        <p>
          In the enchanting world of Harry Potter, mastery of spells holds
          incredible importance. With the repertoire exceeding 200 spells which
          are classified into transfigurations, charms, jinxes, hexes, curses,
          counter spells, and healing spells, the challenge lies in being able
          to proficiently find the right one. In the Harry Potter books alone,
          there are 80 listed spells that a fan would have to sift through!
          Furthermore, if someone wanted to learn more about the spell performed
          in action, it would be difficult to find which witch/wizard used that
          spell before.
        </p>
        <p>
          To address these complexities, we are developing a database capable of
          quickly retrieving and recording Hogwarts wizards and spells to avoid
          accidentally turning someone into a frog instead of levitating them!
          We’ve created a tool to track spells, along with the ability to record
          instances of when the spell was used, and which wizard(s) have used
          the spell. This addition of transactions will promote the learning
          experience of magic, providing a historical perspective on spell
          usage. With the anticipation of numerous transactions, we imagine that
          it will have hundreds of wizard records, organizing and classifying
          over 200 distinct spells, and recording hundreds of instances to
          document spell usage. Additionally, the database will handle data for
          the four major Hogwarts houses.
        </p>

        <p>
          Our database will empower users to seamlessly look up wizards,
          providing comprehensive insights into their house, wand types, and
          graduation status. This feature enhances the learning experience of
          the users.
        </p>
      </div>
    </main>
  );
}
